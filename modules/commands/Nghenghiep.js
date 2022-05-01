module.exports.config = {
  name: "nghenghiep",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "mod by J-Kyle",
  description: "xem nghề nghiệp tương lai của bạn",
  commandCategory: "Game",
  cooldowns: 5
};

module.exports.run = function({ api, event }) {
  const data = ["nghề nghiệp tương lai của bạn là 1 con phò ", " nghề nghiệp tương lai của bạn là thợ sửa ống nước may mắn ", " nghề nghiệp tương lai của bạn là buôn bán ma túy ", " nghề nghiệp tương lai của bạn là rửa đít cho ngựa ", " nghề nghiệp tương lai của bạn là cô y tá damdang ", " nghề nghiệp tương lai của bạn là lao công dọn vệ sinh ", " nghề nghiệp tương lai của bạn là hút bể phốt bằng mồm ", " nghề nghiệp tương lai của bạn là bán kem trộn ", " nghề nghiệp tương lai của bạn là diễn viên phim hành động Nhật Bản ", " nghề nghiệp tương lai của bạn là Suggar Baby ", " Bạn thất nghiệp :))) ", " Không làm mà vẫn có ăn", " nghề nghiệp tương lai của bạn là Youtuber thử thách 24h sống trong cũi chó ", " nghề nghiệp tương lai của bạn là xỉa răng cho cá xấu", " Bạn là tội phạm mại dâm, vì thế bạn sẽ đi tù :))) ", " nghề nghiệp tương lai của bạn là Đạo diễn phim Ấn Độ ", " nghề nghiệp tương lai của bạn là chải lông cho sư tử ", " bạn đc bà lão 95 tuổi bao nuôi nên không cần làm gì cả :))",
  ];
  return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
}