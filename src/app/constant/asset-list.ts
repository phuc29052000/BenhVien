export interface AssetCode {
  typeName: string;
  typeId: number;
}
export var assetList: AssetCode[] = [
  { typeName: 'Quyền sử dụng đất', typeId: 101 },
  { typeName: 'Căn hộ tập thế', typeId: 102 },
  { typeName: 'Nhà chung cư (không có quyền sử dụng đất)', typeId: 103 },
  { typeName: 'Nhà và đất biệt thự', typeId: 104 },
  { typeName: 'Nhà và đất riêng', typeId: 105 },
  { typeName: 'Nhà biệt thự chưa có chứng nhận quyền sở hữu', typeId: 114 },
  {
    typeName: 'Nhà ở thông thường chưa có chứng nhận quyền sở hữu',
    typeId: 115,
  },
  { typeName: 'Đất văn phòng', typeId: 201 },
  { typeName: 'Nhà văn phòng', typeId: 202 },
  { typeName: 'Nhà máy', typeId: 203 },
  { typeName: 'Cửa hàng, nhà xưởng', typeId: 204 },
  { typeName: 'Dự án đầu tư nhà ở', typeId: 205 },
  { typeName: 'Nhà ở hình thành trong tương lai', typeId: 206 },
  { typeName: 'Văn phòng/Diện tích thương mại đã có GCN', typeId: 207 },
  { typeName: 'Dây chuyền sản xuất', typeId: 214 },
  { typeName: 'Máy móc chuyên dụng', typeId: 215 },
  { typeName: 'Máy móc thiết bị khác', typeId: 216 },
  { typeName: 'Ô tô con', typeId: 301 },
  { typeName: 'Ô tô du lịch', typeId: 302 },
  { typeName: 'Xe tải', typeId: 303 },
  { typeName: 'Xe chở hàng container', typeId: 304 },
  { typeName: 'Phương tiện vận tải khác', typeId: 305 },
  { typeName: 'Somi rommoc', typeId: 306 },
  { typeName: 'Xe máy chuyên dụng', typeId: 307 },
  { typeName: 'Tàu biển', typeId: 360 },
  { typeName: 'Tàu thủy nội địa', typeId: 361 },
  { typeName: 'Sà lan', typeId: 362 },
  { typeName: 'Tàu du lịch', typeId: 363 },
  { typeName: 'Tàu hỏa', typeId: 380 },
  { typeName: 'Máy bay', typeId: 385 },
  { typeName: 'Nguyên vật liệu, bán thành phẩm', typeId: 401 },
  { typeName: 'Thành phẩm/hàng hóa', typeId: 402 },
  { typeName: 'Khoản phải thu', typeId: 403 },
  { typeName: 'Hàng hóa là ô tô/xe máy', typeId: 404 },
  { typeName: 'Hạt nhựa', typeId: 405 },
  { typeName: 'Capital contribution in interprise', typeId: 410 },
  { typeName: 'TSBĐ là lương', typeId: 412 },
  { typeName: 'TSBĐ là lương bảo đảm cho dư nợ thẻ', typeId: 413 },
  { typeName: 'Quyền tài sản hình thành trong tương lai', typeId: 420 },
  { typeName: 'QTS HDMB/thuê DH/thuê mua biệt thự DA', typeId: 421 },
  { typeName: 'QTS hợp động thuê/thuê lại đất', typeId: 422 },
  { typeName: 'QTS HDMB/thu mua văn phòng/diện tích thương mại', typeId: 423 },
  { typeName: 'Quyền tài sản phát sinh từ dự án đầu tư', typeId: 424 },
  { typeName: 'Quyền tài sản khác', typeId: 425 },
  { typeName: 'Hợp đồng bảo hiểm', typeId: 500 },
  { typeName: 'Bằng phát minh sáng chế, quyền sở hữu trí tuệ', typeId: 510 },
  { typeName: 'Quyền thụ hưởng L/C', typeId: 520 },
  { typeName: 'Tiền mặt - VNĐ', typeId: 530 },
  { typeName: 'Vàng miếng', typeId: 541 },
  { typeName: 'Vàng khác', typeId: 542 },
  { typeName: 'Tiền mặt - Ngoại tệ', typeId: 550 },
  { typeName: 'Tiền gửi tại MB', typeId: 601 },
  { typeName: 'Tiền gửi tại các TCTD khác', typeId: 602 },
  { typeName: 'Chứng chỉ tiền gửi của MB', typeId: 603 },
  { typeName: 'Chứng chỉ tiền gửi của các TDTC khác', typeId: 604 },
  { typeName: 'Hợp đồng tiền gửi tại MB', typeId: 605 },
  { typeName: 'Kỳ phiếu', typeId: 606 },
  { typeName: 'Hợp đồng tiền gửi TCTD khác', typeId: 607 },
  { typeName: 'Cổ phiếu doanh nghiệp đã niêm yết', typeId: 701 },
  { typeName: 'Cố phiếu doanh nghiệp chưa niệm yết', typeId: 702 },
  { typeName: 'Cổ phiếu TCTD đã niêm yết', typeId: 703 },
  { typeName: 'Cổ phiếu TCTD chưa niêm yết', typeId: 704 },
  { typeName: 'Chứng chỉ quỹ', typeId: 780 },
  {
    typeName:
      'Chứng khoán khác đã niêm yết trên Sở giao dịch chứng khoán do doanh nghiệp ',
    typeId: 751,
  },
  {
    typeName:
      'Chứng khoán khác chưa niêm yết trên Sở giao dịch chứng khoán do doanh nghiệp có đăng ký niêm yết trên Sở giao dịch chứng khoán phát hành',
    typeId: 752,
  },
  {
    typeName:
      'Chứng khoán khác chưa niêm yết trên Sở giao dịch chứng khoán do Tổ chức tín dụng có đăng ký niêm yết trên Sở giao dịch chứng khoán phát hành',
    typeId: 755,
  },
  {
    typeName:
      'Chứng khoán khác chưa niêm yết trên Sở giao dịch chứng khoán do Tổ chức tín dụng không có đăng ký niêm yết trên Sở giao dịch chứng khoán phát hành',
    typeId: 756,
  },
  { typeName: 'Tín phiếu kho bạc', typeId: 800 },
  { typeName: 'Tín phiếu doanh nghiệp', typeId: 901 },
  { typeName: 'Trái phiếu Chính phủ', typeId: 901 },
  { typeName: 'Trái phiếu chính quyền địa phương', typeId: 904 },
  { typeName: 'Trái phiếu doanh nghiệp đã niêm yết', typeId: 907 },
  {
    typeName:
      'Trái phiếu doanh nghiệp chưa niêm yết do DN có đăng ký niêm yết trên Sở giao dịch chứng khoán phát hành',
    typeId: 908,
  },
  {
    typeName:
      'Trái phiếu doanh nghiệp chưa niêm yết do DN không có đăng ký niêm yết trên Sở giao dịch chứng khoán phát hành',
    typeId: 909,
  },
  { typeName: 'Trái phiếu TCTD đã niêm yết', typeId: 910 },
  {
    typeName:
      'Trái phiếu TCTD chưa niêm yết do TCTD có đăng ký niêm yết trên Sở giao dịch chứng khoán phát hành',
    typeId: 911,
  },
  {
    typeName:
      'Trái phiếu TCTD chưa niêm yết do TCTD không có đăng ký niêm yết trên Sở giao dịch chứng khoán phát hành',
    typeId: 912,
  },
  { typeName: 'Công trái xây dựng tổ quốc', typeId: 902 },
  { typeName: 'Trái phiếu được chính phủ bảo lãnh', typeId: 903 },
];
