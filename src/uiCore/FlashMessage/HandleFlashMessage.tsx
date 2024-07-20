import React, { PureComponent, useEffect } from 'react';
import PropTypes from 'prop-types';
import { has } from 'underscore';
import FlashMessage from './index';

/**
 * ### class for store
 */
class Store {
  refs: { [key: string]: any } = {};

  /**
   * ### add ref
   */
  add(ref: any): [() => boolean] {
    if (!has(this.refs, 'flashMessage')) {
      this.refs['flashMessage'] = ref;
    }
    return [this.del.bind(this)];
  }

  /**
   * ### get
   */
  get(): any {
    if (!has(this.refs, 'flashMessage')) {
      return false;
    }
    return this.refs['flashMessage'];
  }

  /**
   * ### del
   */
  del(): boolean {
    if (has(this.refs, 'flashMessage')) {
      delete this.refs['flashMessage'];
      return true;
    }
    return false;
  }
}

let store = new Store();

interface CreateHandleFlashMessageProps {
  [key: string]: any;
}

export function CreateHandleFlashMessage(props: CreateHandleFlashMessageProps) {
  const storeId: any = {
    clear: false,
  };

  const _setRef = (ref: any) => {
    if (!storeId.clear) {
      const [clear] = store.add(ref);
      storeId.clear = clear;
    }
  };

  useEffect(() => {
    return () => {
      if (storeId.clear) {
        storeId.clear();
      }
    };
  }, []);

  return <HandleWrapperFlashMessage ref={_setRef.bind(storeId)} {...props} />;
}

export function addFlashMessagesSucc(message: string) {
  let ref = store.get();
  const data = {
    type: 'successful',
    desc: message,
  };
  ref && ref.addFlashMessage(data);
}

export function addFlashMessageFailed(message: string) {
  let ref = store.get();
  const data = {
    type: 'failed',
    desc: message,
  };
  ref && ref.addFlashMessage(data);
}

export function addFlashMessagesWarning(message: string) {
  let ref = store.get();
  const data = {
    type: 'warning',
    desc: message,
  };
  ref && ref.addFlashMessage(data);
}

export function deleteFlashMessageById(id: number) {
  let ref = store.get();
  ref.deleteMessageById(id);
}

interface HandleWrapperFlashMessageState {
  allFlashMessage: Array<{ type: string; desc: string; id: number }>;
}

export default class HandleWrapperFlashMessage extends PureComponent<any, HandleWrapperFlashMessageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      allFlashMessage: [],
    };
  }

  static propTypes = {
    allFlashMessage: PropTypes.array,
  };

  addFlashMessage = (data: { type: string; desc: string; id: number }) => {
    data.id = new Date().getTime();
    this.setState({
      allFlashMessage: [...this.state.allFlashMessage, data],
    });
  };

  deleteMessageById = (id: number) => {
    const dataNews = this.state.allFlashMessage.filter((element) => element.id !== id);
    this.setState({
      allFlashMessage: dataNews,
    });
  };

  render() {
    const allData = this.state.allFlashMessage;
    if (allData?.length <= 0) return null;
    return (
      <div
        className="wrapper"
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          overflow: 'hidden',
          maxHeight: '100vh',
          overflowY: 'hidden',
          padding: '120px 12px 0 0',
          zIndex: '2',
          transition: 'all linear 2s',
        }}>
        {allData?.map((item, index) => (
          <div key={index}>
            <FlashMessage
              type={item.type}
              desc={item.desc}
              id={item.id}
              handleDeleteFlashMessage={(id: number) => {
                this.deleteMessageById(id);
              }}
            />
          </div>
        ))}
      </div>
    );
  }
}
