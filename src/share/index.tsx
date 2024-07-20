function getRandomLikesPerDay(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function calculateTotalLikes(createdDate: string): number {
  const currentDate = new Date();
  const diffTime = Math.abs(
    currentDate.getTime() - new Date(createdDate).getTime()
  );
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let totalLikes = 0;
  for (let i = 0; i < diffDays; i++) {
    totalLikes += getRandomLikesPerDay(13, 20);
  }

  return totalLikes;
}
