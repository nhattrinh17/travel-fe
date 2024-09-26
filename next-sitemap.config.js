module.exports = {
  siteUrl: process.env.URL_MAIN || "https://thglobaltravel.com/", // Thay đổi thành URL của bạn
  generateRobotsTxt: true, // Tạo robots.txt tự động
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/admin" }, // Chặn đường dẫn /admin
    ],
  },
};
