
import Image4_6 from './resources/4_6.jpg'
import Image4_5 from './resources/4_5.jpg'
import Image7_1 from './resources/7.1.jpg'

export interface QuestionsInterface {
    questions: string
    options: string[]
    correctAnswer: number
    image?: any
}

// CHapter 7
export const questions = [

    // chapter 1
    {
        question: "Một công ty gần đây đã mua một ứng dụng thương mại sẵn có để tự động hóa quy trình thanh toán hóa đơn của họ. Bây giờ họ dự định thực hiện một bài kiểm tra chấp nhận đối với gói phần mềm trước khi triển khai vào sản xuất. Lý do chính xác nhất cho việc kiểm tra của họ là gì?",
        options: [
            "a) Xây dựng niềm tin vào ứng dụng.",
            "b) Phát hiện lỗi trong ứng dụng.",
            "c) Thu thập chứng cứ cho một vụ kiện.",
            "d) Huấn luyện người dùng."
        ],
        correctAnswer: 1
    },
    {
        question: "Theo từ điển thuật ngữ ISTQB, từ 'bug' đồng nghĩa với từ nào trong các từ sau đây?",
        options: [
            "a) Sự cố",
            "b) Khuyết điểm",
            "c) Sai lầm",
            "d) Lỗi"
        ],
        correctAnswer: 2
    },
    {
        question: "Theo từ điển thuật ngữ ISTQB, rủi ro liên quan đến điều gì trong số các điều sau đây?",
        options: [
            "a) Phản hồi tiêu cực cho người kiểm thử.",
            "b) Hậu quả tiêu cực sẽ xảy ra.",
            "c) Hậu quả tiêu cực có thể xảy ra.",
            "d) Hậu quả tiêu cực đối với đối tượng kiểm thử."
        ],
        correctAnswer: 3
    },
    {
        question: "Đảm bảo rằng thiết kế kiểm thử bắt đầu trong giai đoạn xác định yêu cầu quan trọng để hỗ trợ mục tiêu kiểm thử nào sau đây?",
        options: [
            "a) Ngăn chặn khuyết điểm trong hệ thống.",
            "b) Phát hiện khuyết điểm thông qua kiểm thử động.",
            "c) Tăng cường niềm tin vào hệ thống.",
            "d) Hoàn thành dự án đúng hạn."
        ],
        correctAnswer: 1
    },
    {
        question: "Một đội kiểm thử liên tục phát hiện giữa 90% và 95% số khuyết điểm có mặt trong hệ thống đang được kiểm thử. Trong khi quản lý kiểm thử hiểu rằng đây là tỷ lệ phát hiện khuyết điểm tốt đối với đội kiểm thử của mình và ngành công nghiệp, ban lãnh đạo cấp cao vẫn thất vọng với nhóm kiểm thử, nói rằng đội kiểm thử bỏ lỡ quá nhiều lỗi. Với việc người dùng nói chung đều hài lòng với hệ thống và những sự cố đã xảy ra thường có tác động thấp, nguyên tắc kiểm thử nào dưới đây có khả năng giúp quản lý kiểm thử giải thích cho các quản lý và điều hành vì sao một số khuyết điểm có thể bị bỏ lỡ?",
        options: [
            "a) Kiểm thử toàn diện là không thể",
            "b) Gom cụm khuyết điểm",
            "c) Nghịch lý thuốc trừ sâu",
            "d) Sai lầm về sự vắng mặt của lỗi"
        ],
        correctAnswer: 1
    },
    {
        question: "Theo từ điển thuật ngữ ISTQB, kiểm thử hồi quy được yêu cầu với mục đích gì?",
        options: [
            "a) Xác minh sự thành công của các biện pháp sửa chữa.",
            "b) Ngăn chặn một công việc từ việc được xem xét là đã hoàn thành không đúng.",
            "c) Đảm bảo rằng khuyết điểm không được giới thiệu bởi một sửa đổi.",
            "d) Tạo động lực cho việc kiểm thử đơn vị tốt hơn bởi các lập trình viên."
        ],
        correctAnswer: 3
    },
    {
        question: "Điều gì là quan trọng nhất để thúc đẩy và duy trì mối quan hệ tốt giữa người kiểm thử và nhà phát triển?",
        options: [
            "a) Hiểu biết về những gì người quản lý đánh giá về kiểm thử.",
            "b) Giải thích kết quả kiểm thử một cách trung lập.",
            "c) Xác định phương án tạm thời của khách hàng cho lỗi.",
            "d) Thúc đẩy phần mềm chất lượng tốt hơn mỗi khi có thể."
        ],
        correctAnswer: 2
    },
    {
        question: "Phát biểu nào dưới đây là đánh giá tốt nhất về cách nguyên tắc kiểm thử áp dụng qua chu kỳ kiểm thử?",
        options: [
            "a) Nguyên tắc kiểm thử chỉ ảnh hưởng đến việc chuẩn bị cho kiểm thử.",
            "b) Nguyên tắc kiểm thử chỉ ảnh hưởng đến các hoạt động thực thi kiểm thử.",
            "c) Nguyên tắc kiểm thử ảnh hưởng đến các hoạt động kiểm thử sớm như đánh giá.",
            "d) Nguyên tắc kiểm thử ảnh hưởng đến các hoạt động trong toàn bộ chu kỳ kiểm thử."
        ],
        correctAnswer: 4
    },

    // chapter 2
    {
        question: "Giải pháp nào là tốt nhất cho kiểm thử trong vòng đời phát triển phát triển phần mềm?",
        options: [
            "a)	Phân tích kiểm thử và thiết kế ngay từ sớm.",
            "b)	Các mức kiểm thử phần mềm khác nhau được định nghĩa với mục tiêu cụ thể.",
            "c) Testers sẽ tham gia  ngay khi mã nguồn được thực hiện.",
            "d) Cả A và B đều đúng."
        ],
        correctAnswer: 4
    },

    {
        question: "Lựa chọn nào sau đây mô tả các mục tiêu cho các mức kiểm thử với một vòng đời ?",
        options: [
            "a) Các mục tiêu nên được chung cho bất kỳ mức kiểm thử.",
            "b) Các mục tiêu phải giống nhau cho mỗi mức kiểm thử.",
            "c) Các mục tiêu của một mức kiểm thử không cần được định nghĩa trước.",
            "d) Mỗi mức kiểm thử có các mục tiêu cụ thể."
        ],
        correctAnswer: 4
    },

    {
        question: "Câu nào sau đây là loại kiểm thử ?",
        options: [
            "a) Component testing",
            "b) Functional testing.",
            "c) System testing",
            "d) Acceptance testing."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu nào sau đây là kiểm thử phi chức năng?",
        options: [
            "a) Feasibility",
            "b) Usability.",
            "c) Maintenance",
            "d) Regression."
        ],
        correctAnswer: 2
    },
    {
        question: "Câu nào sau đây là kiểm thử chức năng?",
        options: [
            "a) Đo thời gian phản hồi của hệ thống đặt vé trực tuyến",
            "b) Kiểm tra ảnh hưởng của lưu lượng giao thông cao trong một hệ thống tổng đài.",
            "c) Kiểm tra hệ thống đặt vé trực tuyến hiển thị thông tin và nội dung cơ sở dữ liệu chống lại thông tin",
            "d) Kiểm tra mức độ dễ sử dụng của một hệ thống.."
        ],
        correctAnswer: 3
    },
    {
        question: "Câu nào sau đây đúng đối với quá trình sửa chữa những thay đổi khẩn cấp",
        options: [
            "a) Không có thời gian để test trước khi đưa ra vận hành, vì vậy lập trình viên nên làm công việc này và không nên liên quan đến tester",
            "b) Chỉ chạy lại test để của lỗi đã được sửa.",
            "c) Chạy tất cả các kiểm thử hồi quy của toàn bộ hệ thống trong trường hợp tất cả các phần khác của hệ thống bị ảnh hưởng trên diện rộng",
            "d) Kiểm tra lại khu vực đã thay đổi và sau đó sử dụng rủi ro đánh giá để quyết định một tập hợp con hợp lý của toàn bộ thử nghiệm hồi quy sẽ chạy trong trường hợp khác các bộ phận của hệ thống đã bị ảnh hưởng tiêu cực ảnh hưởng."
        ],
        correctAnswer: 4
    },
    {
        question: "Kiểm thử hồi quy",
        options: [
            "a) Chỉ chạy một lần",
            "b) Luôn luôn được tự động ",
            "c) Chỉ kiểm tra khu vực không thay đổi để xem nó có bị ảnh hưởng hay không",
            "d) Sẽ kiểm tra khu vực có thay đổi để xem nó có bị thay đổi hay không."
        ],
        correctAnswer: 3
    },
    {
        question: "Kiểm thử phi chức năng bao gồm?",
        options: [
            "a) Kiểm tra để xem để xem hệ thống không hoạt động đúng chức năng",
            "b) Kiểm tra chất lượng của hệ thống bao gồm tính tin cây và tính tái sử dụng ",
            "c) Tăng sự chấp nhận của người dùng",
            "d) Kiểm thử các chức năng chỉ sử dụng các yêu cầu phần mềm cho tính năng đó."
        ],
        correctAnswer: 2
    },
    {
        question: "Beta testing là gì?",
        options: [
            "a) Được thực hiện bởi khách hàng và trên trang của họ",
            "b) Được thực hiện bởi khách hàng và trên trang của nhà phát triển",
            "c) Được thực hiển bởi một team kiểm thử ngoài",
            "d) Hữu ích cho việc kiểm thử cho một khách hàng hay nguời dùng cụ thể."
        ],
        correctAnswer: 1
    },

    // chapter 3
    {
        question: "Các tác phẩm nghệ thuật sau đây có thể được kiểm tra bằng các kỹ thuật đánh giá nào?",
        options: [
            "a) Mã phần mềm",
            "b) Đặc tả yêu cầu",
            "c) Thiết kế kiểm thử",
            "d) Tất cả các câu trên"
        ],
        correctAnswer: 4
    },
    {
        question: "Câu nào về chức năng của một công cụ phân tích tĩnh là đúng?",
        options: [
            "a) Cung cấp thông tin chất lượng về mã mà không thực thi nó.",
            "b) Kiểm tra kết quả dự kiến so với kết quả thực tế.",
            "c) Có thể phát hiện rò rỉ bộ nhớ.",
            "d) Cung cấp thông tin về mã đã và chưa được thực hiện."
        ],
        correctAnswer: 1
    },
    {
        question: "Loại nào không phải là một dạng kiểm tra?",
        options: [
            "a) Duyệt qua (Walkthrough)",
            "b) Kiểm tra (Inspection)",
            "c) Kiểm tra không chính thức (Informal review)",
            "d) Sự chấp thuận của quản lý"
        ],
        correctAnswer: 4
    },
    {
        question: "Tuyên bố nào về kiểm tra là đúng?",
        options: [
            "a) Các cuộc kiểm tra được dẫn dắt bởi một người điều hành được đào tạo, trong khi các cuộc kiểm tra kỹ thuật không nhất thiết.",
            "b) Các cuộc kiểm tra kỹ thuật được dẫn dắt bởi một người lãnh đạo được đào tạo, còn các cuộc kiểm tra không phải.",
            "c) Trong một cuộc duyệt qua, tác giả không tham gia.",
            "d) Người tham gia cuộc duyệt qua luôn cần được đào tạo kỹ lưỡng."
        ],
        correctAnswer: 1
    },
    {
        question: "Sự khác biệt chính giữa một cuộc duyệt qua và một cuộc kiểm tra là gì?",
        options: [
            "a) Một cuộc kiểm tra được dẫn dắt bởi tác giả, trong khi một cuộc duyệt qua được dẫn dắt bởi một người điều hành được đào tạo.",
            "b) Một cuộc kiểm tra có một người lãnh đạo được đào tạo, trong khi một cuộc duyệt qua không có lãnh đạo.",
            "c) Tác giả không có mặt trong cuộc kiểm tra, trong khi họ có mặt trong cuộc duyệt qua.",
            "d) Một cuộc duyệt qua được dẫn dắt bởi tác giả, trong khi một cuộc kiểm tra được dẫn dắt bởi một người điều hành được đào tạo."
        ],
        correctAnswer: 4
    },
    {
        question: "Cặp nào giữa các đặc điểm và loại quá trình kiểm tra sau đây phù hợp? Được dẫn dắt bởi tác giả Không có tài liệu Không có sự tham gia của quản lý. Được dẫn dắt bởi một người điều hành hoặc lãnh đạo được đào tạo. Sử dụng tiêu chí vào và ra,s. Kiểm tra (Inspection),t. Kiểm tra kỹ thuật (Technical review),u. Kiểm tra không chính thức (Informal review), v. Duyệt qua (Walkthrough)",
        options: [
            "a) s = 4, t = 3, u = 2 và 5, v = 1",
            "b) s = 4 và 5, t = 3, u = 2, v = 1",
            "c) s = 1 và 5, t = 3, u = 2, v = 4",
            "d) s = 5, t = 4, u = 3, v = 1 và 2"
        ],
        correctAnswer: 2
    },
    {
        question: "Tuyên bố nào về phân tích tĩnh là đúng?",
        options: [
            "a) Với phân tích tĩnh, có thể tìm thấy các khuyết điểm khó tìm thấy bằng kiểm thử động.",
            "b) Biên dịch không phải là một hình thức của phân tích tĩnh.",
            "c) Khi thực hiện đúng, phân tích tĩnh làm cho kiểm thử chức năng trở nên dư thừa.",
            "d) Phân tích tĩnh tìm thấy tất cả các lỗi."
        ],
        correctAnswer: 1
    },
    {
        question: "Tuyên bố nào về thiết kế kiểm thử sớm là đúng và tuyên bố nào là sai? Các khuyết điểm được tìm thấy trong giai đoạn thiết kế kiểm thử sớm có giá trị sửa chữa cao hơn. Thiết kế kiểm thử sớm có thể tìm thấy các khuyết điểm. Thiết kế kiểm thử sớm có thể gây thay đổi cho yêu cầu. Thiết kế kiểm thử sớm tốn nhiều công sức hơn.",
        options: [
            "a) 1 và 3 là đúng. 2 và 4 là sai.",
            "b) 2 là đúng. 1, 3 và 4 là sai.",
            "c) 2 và 3 là đúng. 1 và 4 là sai.",
            "d) 2, 3 và 4 là đúng. 1 là sai."
        ],
        correctAnswer: 2
    },

    {
        question: "Phân tích mã nguồn tĩnh thường xác định tất cả ngoại trừ một vấn đề sau đây. Đó là gì?",
        options: [
            "a) Mã không thể đạt được",
            "b) Biến không được khai báo",
            "c) Lỗi trong yêu cầu",
            "d) Quá ít chú thích"
        ],
        correctAnswer: 3
    },

    // chapter 4
    {
        question: "Trong tài liệu mô tả trong IEEE 829, bạn sẽ tìm thấy hướng dẫn cho các bước cần thực hiện cho một bài kiểm tra, bao gồm thiết lập, đăng nhập, môi trường và đo lường ở đâu?",
        options: [
            "a) Kế hoạch kiểm thử",
            "b) Mô tả thiết kế kiểm thử",
            "c) Mô tả ca kiểm thử",
            "d) Mô tả thủ tục kiểm thử"
        ],
        correctAnswer: 4
    },


    {
        question: "Với một người kiểm thử có kinh nghiệm cao và có nền kinh doanh tốt, phương pháp định nghĩa thủ tục kiểm thử nào sẽ hiệu quả và hiệu suất nhất đối với dự án đang chịu áp lực thời gian nghiêm trọng?",
        options: [
            "a) Một đại trình tóm tắt về các điều kiện kiểm thử và các bước chung cần thực hiện.",
            "b) Mỗi bước trong kiểm thử được mô tả chi tiết.",
            "c) Một đại trình tóm tắt về các điều kiện kiểm thử với các bước cụ thể được thảo luận chi tiết với một người kiểm thử có kinh nghiệm khác.",
            "d) Tài liệu chi tiết về tất cả các ca kiểm thử và ghi chép cẩn thận về từng bước thực hiện trong quá trình kiểm thử."
        ],
        correctAnswer: 1
    },


    {
        question: "Sắp xếp các ca kiểm thử thực hiện các điều kiện kiểm thử sau đây vào thứ tự tốt nhất cho lịch trình kiểm thử, cho một bài kiểm tra kiểm tra sửa đổi của khách hàng trên một cơ sở dữ liệu. /t 1. In bản ghi khách hàng đã sửa đổi. 2. Thay đổi địa chỉ khách hàng: số nhà và tên đường. 3. Ghi và in bản tin lỗi trên màn hình. 4. Thay đổi địa chỉ khách hàng: mã bưu chính. 5. Xác nhận khách hàng hiện tại có trong cơ sở dữ liệu bằng cách mở bản ghi đó. 6. Đóng bản ghi khách hàng và đóng cơ sở dữ liệu. 7. Thử thêm một khách hàng mới mà không có chi tiết gì cả. ",
        options: [
            "a) 5,4,2,1,3,7,6",
            "b) 4,2,5,1,6,7,3",
            "c) 5,4,2,1,7,3,6",
            "d) 5,1,2,3,4,7,6"
        ],
        correctAnswer: 3
    },


    {
        question: " Tại sao cả hai kỹ thuật kiểm thử dựa trên đặc tả và dựa trên cấu trúc lại hữu ích?",
        options: [
            "a) Chúng tìm ra các loại lỗi khác nhau.",
            "b) Sử dụng nhiều kỹ thuật luôn là tốt nhất.",
            "c) Cả hai đều tìm ra cùng loại lỗi.",
            "d) Bởi vì đặc tả thường không có cấu trúc."
        ],
        correctAnswer: 1
    },


    {
        question: "Đặc điểm chính của các kỹ thuật kiểm thử dựa trên cấu trúc là gì?",
        options: [
            "a) Chúng chủ yếu được sử dụng để đánh giá cấu trúc của một đặc tả. ",
            "b) Chúng được sử dụng cả để đo lường phạm vi và để thiết kế các bài kiểm tra để tăng phạm vi.",
            "c) Chúng dựa trên kỹ năng và kinh nghiệm của người kiểm thử.",
            "d) Chúng sử dụng một mô hình hình thức hoặc không hình thức của phần mềm hoặc thành phần."
        ],
        correctAnswer: 2
    },


    {
        question: " Trong số các tùy chọn sau đây, cái nào sẽ là một ví dụ về kiểm thử bảng quyết định cho một ứng dụng tài chính áp dụng ở cấp độ kiểm thử hệ thống?",
        options: [
            "a) Một bảng chứa các quy tắc cho các kết hợp của đầu vào cho hai trường trên một màn hình.",
            "b) Một bảng chứa các quy tắc cho các giao diện giữa các thành phần.",
            "c) Một bảng chứa các quy tắc cho các đơn xin vay mua nhà.",
            "d) Một bảng chứa các quy tắc cho cờ vua."
        ],
        correctAnswer: 3
    },


    {
        question: "Đo lường nào sau đây có thể được sử dụng để đánh giá phạm vi đạt được cho kiểm thử chuyển trạng thái? V. Tất cả các trạng thái đã được đạt được. W. Thời gian phản hồi cho mỗi giao dịch là đủ. X. Mọi chuyển trạng thái đã được thực hiện. Y. Tất cả các biên đã được thực hiện. Z. Các chuỗi cụ thể của các chuyển trạng thái đã được thực hiện.",
        options: [
            "a) X, Y và Z",
            "b) V, X, Y và Z",
            "c) W, X và Y",
            "d) V, X và Z"
        ],
        correctAnswer: 4
    },


    {
        question: "Giá cước bưu chính cho 'bức thư nhẹ' là 25p cho đến 10g, 35p cho đến 50g cộng thêm 10p cho mỗi 25g bổ sung lên đến 100g. Các đầu vào kiểm thử (theo gram) nào sẽ được chọn bằng phương pháp phân chia đẳng?",
        options: [
            "a) 8, 42, 82, 102",
            "b) 4, 15, 65, 92, 159",
            "c) 10, 50, 75, 100",
            "d) 5, 20, 40, 60, 80"
        ],
        correctAnswer: 2
    },


    {
        question: "Đo lường nào sau đây có thể được sử dụng để đánh giá phạm vi đạt được cho các kỹ thuật kiểm thử dựa trên đặc tả (black-box)? V. Kết quả quyết định đã được thực hiện. W. Phân vùng đã được thực hiện. X. Biên đã được thực hiện. Y. Chuyển trạng thái đã được thực hiện. Z. Câu lệnh đã được thực hiện.",
        options: [
            "a) V, W, Y hoặc Z",
            "b) W, X hoặc Y",
            "c) V, X hoặc Z",
            "d) W, X, Y hoặc Z"
        ],
        correctAnswer: 2
    },


    {
        question: "Kỹ thuật thiết kế kiểm thử dựa trên cấu trúc nào sau đây có khả năng được áp dụng nhất cho? 1. Biên giữa giữa các dải lãi suất vay mua nhà. 2. Một chuyển trạng thái không hợp lệ giữa hai trạng thái nợ khác nhau. 3. Luồng công việc kinh doanh cho phê duyệt vay mua nhà. 4. Luồng kiểm soát của chương trình để tính toán trả góp.",
        options: [
            "a) 2, 3 và 4",
            "b) 2 và 4",
            "c) 3 và 4",
            "d) 1, 2 và 3"
        ],
        correctAnswer: 3
    },


    {
        question: "Kiểm thử use case hữu ích cho mục đích nào sau đây? P. Thiết kế các bài kiểm thử chấp nhận với người dùng hoặc khách hàng. Q. Đảm bảo rằng các quy trình kinh doanh chính được kiểm thử. R. Tìm lỗi trong tương tác giữa các thành phần. S. Xác định các giá trị tối đa và tối thiểu cho mỗi trường nhập. T. Xác định tỷ lệ phần trăm câu lệnh được thực hiện bởi một tập hợp các bài kiểm thử.",
        options: [
            "a) P, Q và R",
            "b) Q, S và T",
            "c) P, Q và S",
            "d) R, S và T"
        ],
        correctAnswer: 1
    },


    {
        question: "Câu nào sau đây đúng về mối quan hệ giữa phủ câu lệnh và phủ quyết định?",
        options: [
            "a) 100% phủ quyết định đạt được nếu phủ câu lệnh lớn hơn 90%.",
            "b) 100% phủ câu lệnh đạt được nếu phủ quyết định lớn hơn 90%.",
            "c) 100% phủ quyết định luôn đồng nghĩa với 100% phủ câu lệnh.",
            "d) 100% phủ câu lệnh luôn đồng nghĩa với 100% phủ quyết định."
        ],
        correctAnswer: 3
    },


    {
        question: "Nếu bạn bay với vé phổ thông, có khả năng bạn sẽ được nâng cấp lên hạng phòng chờ kinh doanh, đặc biệt là nếu bạn có thẻ vàng trong chương trình khách thường xuyên của hãng hàng không. Nếu bạn không có thẻ vàng, có khả năng bạn sẽ bị 'bump' khỏi chuyến bay nếu chuyến bay đầy đủ và bạn check-in muộn. Điều này được thể hiện trong Hình 4.5. Lưu ý rằng mỗi ô (tức là câu lệnh) đã được đánh số. Ba bài kiểm thử đã được thực hiện: Test 1: Người giữ thẻ vàng được nâng cấp lên hạng phòng chờ kinh doanh Test 2: Người không giữ thẻ vàng ở lại hạng phổ thông Test 3: Người bị 'bump' khỏi chuyến bay Phủ câu lệnh của ba bài kiểm thử này là bao nhiêu?",
        image: Image4_5,
        options: [
            "a) 60%",
            "b) 70%",
            "c) 80%",
            "d) 90%"
        ],
        correctAnswer: 3
    },


    {
        question: `Tại sao "đoán lỗi" và "kiểm thử thám hiểm" lại là những phương pháp tốt để thực hiện?`,
        options: [
            "a) Chúng có thể phát hiện các lỗi bị bỏ sót bởi các kỹ thuật dựa trên đặc tả và cấu trúc.",
            "b) Chúng không đòi hỏi bất kỳ đào tạo nào để có hiệu suất như các kỹ thuật chính thức.",
            "c) Chúng có thể được sử dụng một cách hiệu quả nhất khi có đặc tả tốt.",
            "d) Chúng sẽ đảm bảo rằng toàn bộ mã hoặc hệ thống được kiểm thử."
        ],
        correctAnswer: 1
    },


    {
        question: "Phương pháp dựa trên kinh nghiệm khác biệt với các phương pháp dựa trên đặc tả như thế nào?",
        options: [
            "a) Chúng phụ thuộc vào sự hiểu biết của người kiểm thử về cách hệ thống được cấu trúc thay vì dựa trên một bản ghi tài liệu về những gì hệ thống nên làm.",
            "b) Chúng phụ thuộc vào việc có người kiểm thử già hơn thay vì người kiểm thử trẻ hơn.",
            "c) Chúng phụ thuộc vào một bản ghi tài liệu về những gì hệ thống nên làm thay vì dựa trên quan điểm cá nhân của cá nhân.",
            "d) Chúng phụ thuộc vào quan điểm cá nhân của cá nhân thay vì dựa trên một bản ghi tài liệu về những gì hệ thống nên làm."
        ],
        correctAnswer: 4
    },


    {
        question: "Khi chọn kỹ thuật nào để sử dụng trong một tình huống cụ thể, những yếu tố nào nên được xem xét? U. Kinh nghiệm trước đó về các loại lỗi được tìm thấy trong hệ thống này hoặc trong các hệ thống tương tự. V. Kiến thức hiện tại của các người kiểm thử. W. Các tiêu chuẩn quy định áp dụng. X. Loại công cụ thực thi kiểm thử sẽ được sử dụng. Y. Tài liệu có sẵn. Z. Kinh nghiệm trước đó trong ngôn ngữ phát triển.",
        options: [
            "a) V, W, Y và Z",
            "b) U, V, W và Y",
            "c) U, X và Y",
            "d) V, W và Y"
        ],
        correctAnswer: 2
    },


    {
        question: "Cho trạng thái diagram trong Hình 4.6, test case nào là chuỗi tối thiểu của chuyển trạng thái hợp lệ để bao phủ mọi trạng thái?",
        image: Image4_6,
        options: [
            "a) SS-S1-S2-S4-S1-S3-ES",
            "b) SS-S1-S2-S3-S4-ES",
            "c) SS-S1-S2-S4-S1-S3-S4-S1-S3-ES",
            "d) SS-S1-S4-S2-S1-S3-ES"
        ],
        correctAnswer: 1
    },

    // chapter 5
    {
        question: "Tại sao việc kiểm thử độc lập quan trọng?",
        options: [
            "a) Kiểm thử độc lập thường rẻ hơn so với việc kiểm thử công việc của chính bạn.",
            "b) Kiểm thử độc lập hiệu quả hơn trong việc phát hiện các lỗi.",
            "c) Người kiểm thử độc lập nên quyết định các quy trình và phương pháp được sử dụng.",
            "d) Người kiểm thử độc lập không đặt quan điểm tích cực hoặc tiêu cực về việc dự án thành công hay thất bại."
        ],
        correctAnswer: 2
    },
    {
        question: "Trong những nhiệm vụ sau đây, điều nào thường gặp của một người lãnh đạo kiểm thử?",
        options: [
            "a) Phát triển yêu cầu hệ thống, các quy trình thiết kế và mô hình sử dụng. ",
            "b) Xử lý tất cả các nhiệm vụ tự động hóa kiểm thử. ",
            "c) Giữ cho các bài kiểm thử và phạm vi kiểm thử được che giấu khỏi các lập trình viên. ",
            "d) Thu thập và báo cáo các số liệu tiến trình kiểm thử. "
        ],
        correctAnswer: 4
    },
    {
        question: "Theo từ điển ISTQB, khi nói ai đó là một quản lý kiểm thử, ý nghĩa là gì?",
        options: [
            "a) Một quản lý kiểm thử quản lý một tập hợp các lãnh đạo kiểm thử. ",
            "b) Một quản lý kiểm thử là người lãnh đạo của một đội hoặc các đội kiểm thử. ",
            "c) Một quản lý kiểm thử nhận lương cao hơn so với một lãnh đạo kiểm thử. ",
            "d) Một quản lý kiểm thử báo cáo cho một lãnh đạo kiểm thử. "
        ],
        correctAnswer: 2
    },
    {
        question: "Sự khác biệt chính giữa kế hoạch kiểm thử, đặc tả thiết kế kiểm thử và đặc tả thủ tục kiểm thử là gì?",
        options: [
            "a) Kế hoạch kiểm thử mô tả một hoặc nhiều cấp độ kiểm thử, đặc tả thiết kế kiểm thử xác định các trường hợp 		kiểm thử cấp cao liên quan và đặc tả thủ tục kiểm thử mô tả các bước để thực hiện một kiểm thử. ",
            "b) Kế hoạch kiểm thử dành cho quản lý, đặc tả thiết kế kiểm thử dành cho lập trình viên và đặc tả thủ tục 			kiểm thử dành cho người kiểm thử tự động. ",
            "c) Kế hoạch kiểm thử là ít chi tiết nhất, đặc tả thủ tục kiểm thử là chi tiết nhất và đặc tả thiết kế kiểm 		thử ở giữa. ",
            "d) Kế hoạch kiểm thử hoàn thành trong một phần ba đầu của dự án, đặc tả thiết kế kiểm thử hoàn thành ở phần 		giữa của dự án và đặc tả thủ tục kiểm thử hoàn thành ở phần cuối của dự án. "
        ],
        correctAnswer: 1
    },
    {
        question: "Yếu tố nào sau đây ảnh hưởng đến công việc kiểm thử trong hầu hết các dự án?",
        options: [
            "a) Sự tách rời địa lý giữa người kiểm thử và lập trình viên. ",
            "b) Sự rời bỏ của quản lý kiểm thử trong suốt dự án. ",
            "c) Chất lượng thông tin được sử dụng để phát triển các bài kiểm thử. ",
            "d) Bất ngờ về bệnh kéo dài của một thành viên trong nhóm dự án."
        ],
        correctAnswer: 3
    },
    {
        question: "Chuẩn ISTQB Foundation xác lập quy trình kiểm thử cơ bản, trong đó kế hoạch kiểm thử diễn ra sớm trong 		dự án, trong khi thực hiện kiểm thử xảy ra ở cuối. Trong số các yếu tố sau đây của kế hoạch kiểm thử, 			trong khi được chỉ định trong quá trình kế hoạch kiểm thử, thì được đánh giá trong quá trình thực hiện 			kiểm thử?",
        options: [
            "a) Các công việc kiểm thử",
            "b) Các yêu cầu môi trường",
            "c) Tiêu chí thoát",
            "d) Đào tạo đội kiểm thử "
        ],
        correctAnswer: 3
    },
    {
        question: "Xem xét các tiêu chí thoát sau đây có thể được tìm thấy trong một kế hoạch kiểm thử: I Không có lỗi nào quan trọng đối với khách hàng được biết đến. II Tất cả các giao diện giữa các thành phần đã được kiểm thử. III 100% mã nguồn của tất cả các đơn vị đã được kiểm thử. IV Tất cả các yêu cầu được xác định đã được đáp ứng. V Chức năng hệ thống khớp với hệ thống cũ cho tất cả các quy tắc kinh doanh. Câu nào sau đây là đúng về việc liệu những tiêu chí thoát này có thuộc kế hoạch kiểm thử chấp nhận hay không?",
        options: [
            "a) Tất cả các câu đều thuộc kế hoạch kiểm thử chấp nhận. ",
            "b) Chỉ câu I thuộc kế hoạch kiểm thử chấp nhận.",
            "c) Chỉ các câu I, II và V thuộc kế hoạch kiểm thử chấp nhận. ",
            "d) Chỉ các câu I, IV và V thuộc kế hoạch kiểm thử chấp nhận."
        ],
        correctAnswer: 4
    },
    {
        question: `Theo từ điển ISTQB, "mức kiểm thử" là gì?`,
        options: [
            "a) Một nhóm các hoạt động kiểm thử được tổ chức cùng nhau. ",
            "b) Một hoặc nhiều tài liệu mô tả thiết kế kiểm thử. ",
            "c) Một loại kiểm thử.",
            "d) Một chứng chỉ ISTQB."
        ],
        correctAnswer: 1
    },
    {
        question: "Trong quá trình thực hiện kiểm thử, số liệu nào sau đây sẽ hữu ích nhất để theo dõi?",
        options: [
            "a) Phần trăm các bài kiểm thử đã được viết.",
            "b) Số lượng môi trường kiểm thử còn lại phải cấu hình.",
            "c) Số lượng lỗi được phát hiện và sửa.",
            "d) Phần trăm các yêu cầu đã có bài kiểm thử."
        ],
        correctAnswer: 3
    },
    {
        question: "Trong quá trình thực hiện kiểm thử, quản lý kiểm thử mô tả tình hình sau đây cho đội dự án: '90% số bài kiểm thử đã được chạy. 20% số bài kiểm thử đã xác định lỗi. 127 lỗi đã được phát hiện. 112 lỗi đã được sửa và đã vượt qua kiểm thử xác nhận. Trong số 15 lỗi còn lại, quản lý dự án đã quyết định rằng chúng không cần phải được sửa trước khi phát hành.' Điều nào sau đây là giải thích hợp nhất về báo cáo tình trạng kiểm thử này?",
        options: [
            "a) 15 lỗi còn lại nên được kiểm thử xác nhận trước khi phát hành.",
            "b) 10% bài kiểm thử còn lại nên được chạy trước khi phát hành.",
            "c) Hệ thống hiện đã sẵn sàng để phát hành mà không cần thêm bất kỳ kiểm thử hoặc nỗ lực phát triển nào khác. ",
            "d) Các lập trình viên nên tập trung chú ý vào việc sửa các lỗi còn lại trước khi phát hành. "
        ],
        correctAnswer: 2
    },
    {
        question: "Trong báo cáo tóm tắt kiểm thử, lãnh đạo kiểm thử của dự án đưa ra tuyên bố sau: 'Hệ thống xử lý thanh toán không chấp nhận thanh toán từ chủ thẻ American Express, điều này được coi là một tính năng phải hoạt động cho bản phát hành này.' Tuyên bố này có thể được tìm thấy trong phần nào sau đây của báo cáo?",
        options: [
            "a) Đánh giá",
            "b) Tóm tắt hoạt động",
            "c) Sự chênh lệch",
            "d) Mô tả sự cố"
        ],
        correctAnswer: 1
    },
    {
        question: "Trong giai đoạn sớm của quá trình thực hiện kiểm thử, một lỗi được xác định, giải quyết và xác nhận giải quyết thông qua kiểm thử xác nhận, nhưng sau đó lại xuất hiện lại trong các giai đoạn kiểm thử tiếp theo. Aspect quản lý cấu hình liên quan đến kiểm thử nào là có thể đã xảy ra sự cố?",
        options: [
            "a) Sự theo dõi ",
            "b) Kiểm thử xác nhận",
            "c) Kiểm soát cấu hình",
            "d) Quản lý tài liệu kiểm thử "
        ],
        correctAnswer: 3
    },
    {
        question: "Bạn đang làm việc như một người kiểm thử trên dự án phát triển hệ thống thanh toán cho cửa hàng thực phẩm và các cửa hàng bán lẻ tương tự. Trong số các rủi ro sản phẩm sau đây, rủi ro nào áp dụng cho dự án như vậy?",
        options: [
            "a) Sự xuất hiện của một sản phẩm cạnh tranh đáng tin cậy hơn trên thị trường.",
            "b) Giao hàng một bản phát hành kiểm thử chưa hoàn chỉnh vào chu kỳ kiểm thử hệ thống đầu tiên.",
            "c) Số lượng lớn sửa lỗi không thành công trong quá trình kiểm thử lại.",
            "d) Không chấp nhận thẻ tín dụng được phép."
        ],
        correctAnswer: 4
    },
    {
        question: "Một cuộc họp phân tích rủi ro sản phẩm được tổ chức trong giai đoạn lập kế hoạch dự án. Trong số các yếu tố sau đây, yếu tố nào xác định mức độ rủi ro?",
        options: [
            "a) Độ khó của việc sửa các vấn đề liên quan đến mã nguồn. ",
            "b) Hậu quả có thể xảy ra với người dùng.",
            "c) Giá bán của phần mềm.",
            "d) Nhóm kỹ thuật trong cuộc họp. "
        ],
        correctAnswer: 2
    },
    {
        question: "Trong khi bạn đang viết kế hoạch kiểm thử sử dụng mẫu IEEE 829 và hiện đang hoàn thành phần Rủi ro và Biện pháp phòng ngừa. Trong số các lựa chọn sau đây, điều nào là khả năng cao nhất sẽ được liệt kê là một rủi ro dự án?",
        options: [
            "a) Bất ngờ về sự bệnh của một thành viên quan trọng trong nhóm ",
            "b) Thời gian xử lý giao dịch quá chậm",
            "c) Lỗi dữ liệu dưới điều kiện tắc nghẽn mạng ",
            "d) Không xử lý được trường hợp sử dụng chính "
        ],
        correctAnswer: 1
    },
    {
        question: "Bạn và các bên liên quan trong dự án phát triển một danh sách rủi ro sản phẩm và rủi ro dự án trong giai đoạn lập kế hoạch của dự án. Ngoài ra, bạn nên làm gì với danh sách rủi ro này trong quá trình lập kế hoạch kiểm thử?",
        options: [
            "a) Xác định phạm vi kiểm thử cần thiết cho rủi ro sản phẩm và các biện pháp giảm nhẹ và phòng tránh cần thiết cho rủi ro dự án.",
            "b) Cần thiết nguồn lực để hoàn toàn kiểm soát mỗi rủi ro sản phẩm bằng các bài kiểm tra và chuyển trách nhiệm về rủi ro dự án cho quản lý dự án. ",
            "c) Thực hiện các bài kiểm tra đối với rủi ro sản phẩm, dựa trên xác suất và ảnh hưởng của từng rủi ro sản phẩm và thực hiện biện pháp giảm nhẹ cho tất cả rủi ro dự án. ",
            "d) Không cần thêm hành động quản lý rủi ro nào khác trong giai đoạn lập kế hoạch kiểm thử. "
        ],
        correctAnswer: 1
    },

    {
        question: "Theo từ điển ISTQB, rủi ro sản phẩm liên quan đến điều gì trong số những điều sau đây?",
        options: [
            "a) Kiểm soát của dự án kiểm thử",
            "b) Đối tượng kiểm thử ",
            "c) Một mục kiểm tra duy nhất ",
            "d) Kết quả tiêu cực có thể xảy ra"
        ],
        correctAnswer: 2
    },
    {
        question: "Trong báo cáo sự cố, người kiểm thử đưa ra tuyên bố sau: 'Tại điểm này, tôi mong đợi nhận được một thông báo lỗi giải thích việc từ chối đầu vào không hợp lệ này và yêu cầu tôi nhập một đầu vào hợp lệ. Thay vào đó, hệ thống chấp nhận đầu vào này, hiển thị biểu tượng cát sa trong khoảng một đến năm giây và cuối cùng kết thúc một cách không bình thường, hiển thị thông báo 'Loại dữ liệu không mong đợi: 15. Nhấn để tiếp tục.' Tuyên bố này có thể được tìm thấy ở phần nào trong báo cáo sự cố theo tiêu chuẩn IEEE 829?",
        options: [
            "a) Tóm tắt",
            "b) Ảnh hưởng ",
            "c) Tiêu chí qua/đạt",
            "d) Mô tả sự cố "
        ],
        correctAnswer: 4
    },
    {
        question: "Theo từ điển ISTQB, tài liệu nào được gọi là một văn bản mô tả sự kiện nào đó đã xảy ra trong quá trình kiểm thử và đòi hỏi sự điều tra tiếp theo?",
        options: [
            "a) Báo cáo lỗi ",
            "b) Báo cáo khiếm khuyết",
            "c) Báo cáo sự cố ",
            "d) Báo cáo tóm tắt kiểm thử"
        ],
        correctAnswer: 3
    },
    {
        question: "Một cuộc phân tích rủi ro sản phẩm được thực hiện trong giai đoạn lập kế hoạch của quá trình kiểm thử. Trong giai đoạn thực hiện của quá trình kiểm thử, quản lý kiểm thử hướng dẫn các người kiểm thử phân loại mỗi báo cáo khiếm khuyết theo rủi ro sản phẩm đã biết (hoặc 'khác'). Mỗi tuần, quản lý kiểm thử chạy một báo cáo cho thấy phần trăm báo cáo khiếm khuyết liên quan đến mỗi rủi ro sản phẩm đã biết và đối với các rủi ro không biết. Một trong những ứng dụng có thể có của một báo cáo như vậy là gì?",
        options: [
            "a) Xác định rủi ro mới cho chất lượng hệ thống. ",
            "b) Định vị các cụm khiếm khuyết trong các phần hệ thống sản phẩm. ",
            "c) Kiểm tra bảo đảm rủi ro bằng bài kiểm tra. ",
            "d) Đo lường kiểm thử định hướng. "
        ],
        correctAnswer: 1
    },

    // chapter 6
    {
        question: "Các công cụ nào hỗ trợ kiểm thử tĩnh?",
        options: [
            "a) Công cụ phân tích tĩnh và công cụ thực thi kiểm thử.",
            "b) Công cụ hỗ trợ quy trình đánh giá, công cụ phân tích tĩnh và công cụ đo đạc phạm vi.",
            "c) Công cụ phân tích động và công cụ mô hình hóa.",
            "d) Công cụ hỗ trợ quy trình đánh giá, công cụ phân tích tĩnh và công cụ mô hình hóa."
        ],
        correctAnswer: 4
    },
    {
        question: "Những hoạt động kiểm thử nào được hỗ trợ bởi công cụ test harness hoặc framework đơn vị kiểm thử?",
        options: [
            "a) Quản lý và kiểm soát kiểm thử.",
            "b) Quy định và thiết kế kiểm thử.",
            "c) Thực thi kiểm thử và đăng nhập.",
            "d) Hiệu suất và theo dõi."
        ],
        correctAnswer: 3
    },
    {
        question: "Những lợi ích tiềm năng khi sử dụng công cụ để hỗ trợ kiểm thử là gì?",
        options: [
            "a) Chất lượng mã nguồn cao hơn, giảm số lượng người kiểm thử cần thiết, mục tiêu kiểm thử tốt hơn.",
            "b) Khả năng lặp lại cao hơn trong các bài kiểm thử, giảm công việc lặp lại, đánh giá mục tiêu.",
            "c) Tính năng đáp ứng cao của người dùng, giảm số lượng bài kiểm thử chạy, không cần thiết đề ra mục tiêu.",
            "d) Chất lượng mã nguồn cao hơn, giảm công việc giấy tờ, ít ý kiến phản đối về bài kiểm thử."
        ],
        correctAnswer: 2
    },
    {
        question: "Rủi ro tiềm ẩn khi sử dụng công cụ để hỗ trợ kiểm thử là gì?",
        options: [
            "a) Kỳ vọng không thực tế, mong đợi công cụ làm quá nhiều.",
            "b) Phụ thuộc không đủ vào công cụ, tức là vẫn thực hiện kiểm thử thủ công khi đã mua công cụ thực thi kiểm thử.",
            "c) Công cụ có thể phát hiện các khuyết điểm không tồn tại.",
            "d) Công cụ sẽ lặp lại đúng như đã thực hiện trước đó."
        ],
        correctAnswer: 1
    },
    {
        question: "Những kỹ thuật kịch bản nâng cao cho công cụ thực thi kiểm thử là gì?",
        options: [
            "a) Data-driven và keyword-driven",
            "b) Data-driven và capture-driven",
            "c) Capture-driven và keyhole-driven",
            "d) Playback-driven và keyword-driven"
        ],
        correctAnswer: 1
    },
    {
        question: "Trong việc chọn lựa công cụ cho một tổ chức, điều nào DƯỚI ĐÂY KHÔNG NÊN thực hiện?",
        options: [
            "a) Đánh giá sự chín mu maturity, điểm mạnh và điểm yếu của tổ chức.",
            "b) Triển khai công cụ cho nhiều người dùng nhất có thể trong tổ chức.",
            "c) Đánh giá tính năng của công cụ so với yêu cầu rõ ràng và tiêu chí mục tiêu.",
            "d) Xác định yêu cầu nội bộ để hướng dẫn và huấn luyện trong việc sử dụng công cụ."
        ],
        correctAnswer: 2
    },
    {
        question: "Mục tiêu chính cho giai đoạn chứng minh ý tưởng hoặc giai đoạn thử nghiệm đối với đánh giá công cụ là gì?",
        options: [
            "a) Quyết định chọn công cụ nào để mua.",
            "b) Quyết định về các mục tiêu chính và yêu cầu cho loại công cụ này.",
            "c) Đánh giá nhà cung cấp công cụ bao gồm đào tạo, hỗ trợ và khía cạnh thương mại.",
            "d) Quyết định về cách tiêu chuẩn sử dụng, quản lý, lưu trữ và duy trì công cụ và tài sản kiểm thử."
        ],
        correctAnswer: 4
    },

    // chapter 7
    {
        question: "Đặc điểm quan trọng của các kỹ thuật kiểm thử dựa trên đặc tả là gì?",
        options: [
            "a) Các bài kiểm thử được xuất phát từ thông tin về cách phần mềm được xây dựng.",
            "b) Các bài kiểm thử được xuất phát từ các mô hình (hình thức hoặc không hình thức) chỉ định vấn đề cần giải quyết bởi phần mềm hoặc các thành phần của nó.",
            "c) Các bài kiểm thử được xuất phát dựa trên kỹ năng và kinh nghiệm của người kiểm thử.",
            "d) Các bài kiểm thử được xuất phát từ mức độ bao phủ của các yếu tố cấu trúc trong hệ thống hoặc các thành phần."
        ],
        correctAnswer: 2
    },
    {
        question: "Một bộ kiểm thử chi tiết sẽ bao gồm:",
        options: [
            "a) Tất cả các kết hợp của giá trị đầu vào và điều kiện tiên quyết.",
            "b) Tất cả các kết hợp của giá trị đầu vào và giá trị đầu ra.",
            "c) Tất cả các cặp giá trị đầu vào và điều kiện tiên quyết.",
            "d) Tất cả các trạng thái và chuyển trạng thái."
        ],
        correctAnswer: 1
    },
    {
        question: "Tuyên bố nào sau đây về kiểm thử là đúng?",
        options: [
            "a) Kiểm thử bắt đầu càng sớm càng tốt trong vòng đời của dự án.",
            "b) Kiểm thử bắt đầu sau khi mã nguồn đã được viết để chúng ta có một hệ thống để làm việc.",
            "c) Kiểm thử được thực hiện kinh tế nhất khi ở cuối vòng đời.",
            "d) Kiểm thử chỉ có thể được thực hiện bởi một nhóm kiểm thử độc lập."
        ],
        correctAnswer: 1
    },
    {
        question: "Đối với một thủ tục kiểm thử đang kiểm tra sửa đổi của khách hàng trên một cơ sở dữ liệu, những bước nào dưới đây sẽ có ưu tiên thấp nhất nếu chúng ta không có thời gian để thực hiện tất cả các bước? 1 Mở cơ sở dữ liệu và xác nhận khách hàng hiện tại. 2 Thay đổi tình trạng hôn nhân của khách hàng từ độc thân thành đã kết hôn. 3 Thay đổi tên đường của khách hàng từ Parks Road thành Park Road. 4 Thay đổi hạn mức tín dụng của khách hàng từ 500 thành 750. 5 Thay thế tên đầu tiên của khách hàng bằng chính tên đầu tiên đó. 6 Đóng bản ghi khách hàng và đóng cơ sở dữ liệu.",
        options: [
            "a) Bài kiểm thử 1 và 4",
            "b) Bài kiểm thử 2 và 3",
            "c) Bài kiểm thử 5 và 6",
            "d) Bài kiểm thử 3 và 5"
        ],
        correctAnswer: 4
    },
    {
        question: "Xem xét danh sách sau đây về các rủi ro của sản phẩm hoặc dự án: I Một tính toán sai lầm về phí có thể làm thiệt hại cho tổ chức. II Một nhà cung cấp có thể không giao một thành phần hệ thống đúng hẹn. III Một lỗi có thể cho phép hacker có quyền quản trị. IV Có thể xuất hiện khoảng trống kỹ năng trong một công nghệ mới được sử dụng trong hệ thống. V Quá trình ưu tiên lỗi có thể làm quá tải đội phát triển. Tuyên bố nào sau đây là đúng?",
        options: [
            "a) I chủ yếu là một rủi ro của sản phẩm và II, III, IV và V chủ yếu là rủi ro của dự án.",
            "b) II và V chủ yếu là rủi ro của sản phẩm và I, III và IV chủ yếu là rủi ro của dự án.",
            "c) I và III chủ yếu là rủi ro của sản phẩm, trong khi II, IV và V chủ yếu là rủi ro của dự án.",
            "d) III và V chủ yếu là rủi ro của sản phẩm, trong khi I, II và IV chủ yếu là rủi ro của dự án."
        ],
        correctAnswer: 3
    },
    {
        question: "Xem xét những tuyên bố sau đây về bài kiểm thử hồi quy: I Chúng có thể hữu ích nếu được tự động hóa nếu chúng được thiết kế tốt. II Chúng giống như các bài kiểm thử xác nhận (kiểm thử lại). III Chúng là một cách để giảm thiểu rủi ro của việc thay đổi có ảnh hưởng tiêu cực đến các khu vực khác trong hệ thống. IV Chúng chỉ có hiệu quả nếu được tự động hóa. Cặp tuyên bố nào sau đây là đúng?",
        options: [
            "a) I và II",
            "b) I và III",
            "c) II và III",
            "d) II và IV"
        ],
        correctAnswer: 2
    },
    {
        question: "Điều gì sau đây có thể được sử dụng để đánh giá phạm vi đạt được cho các kỹ thuật kiểm thử dựa trên cấu trúc (white-box)? V Kết quả quyết định được thực hiện W Phân vùng được thực hiện X Biên được thực hiện Y Điều kiện hoặc nhiều điều kiện được thực hiện Z Các tuyên bố được thực hiện",
        options: [
            "a) V, W hoặc Y",
            "b) W, X hoặc Y",
            "c) V, Y hoặc Z",
            "d) W, X hoặc Z"
        ],
        correctAnswer: 3
    },
    {
        question: "Xem xét phần của bản báo cáo sự cố sau đây. 1 Tôi đặt bất kỳ mục nào vào giỏ hàng mua sắm. 2 Tôi đặt bất kỳ mục khác (khác biệt) vào giỏ hàng mua sắm. 3 Tôi loại bỏ mục đầu tiên khỏi giỏ hàng mua sắm, nhưng để mục thứ hai ở trong giỏ hàng. 4 Tôi nhấp vào nút <Thanh toán>. 5 Tôi mong đợi hệ thống hiển thị màn hình thanh toán đầu tiên. Thay vào đó, nó hiển thị thông báo lỗi xuất hiện, 'Không có mục nào trong giỏ hàng. Nhấp vào <Đồng ý> để tiếp tục mua sắm.' 6 Tôi nhấp vào <Đồng ý>. 7 Tôi mong đợi hệ thống quay lại cửa sổ chính để cho phép tôi tiếp tục thêm và xóa các mục từ giỏ hàng. Thay vào đó, trình duyệt kết thúc. 8 Sự cố mô tả ở các bước 5 và 7 đã xảy ra trong mỗi ba lần thử nghiệm để thực hiện các bước 1,2,3,4 và 6. Giả sử rằng không có thông tin miêu tả nào khác được bao gồm trong báo cáo. Điều gì sau đây là mất trong bản báo cáo sự cố quan trọng?",
        options: [
            "a) Các bước để tái tạo lỗi.",
            "b) Tóm tắt.",
            "c) Kiểm tra sự không ổn định.",
            "d) Sử dụng một ngôn ngữ khách quan."
        ],
        correctAnswer: 2
    },
    {
        question: "Lợi ích và rủi ro của việc sử dụng công cụ hỗ trợ kiểm thử là gì? 1 Dựa quá mức vào công cụ 2 Độ nhất quán và có thể lặp lại cao 3 Đánh giá khách quan 4 Kỳ vọng không thực tế 5 Đánh giá dễ dàng truy cập thông tin về các bài kiểm thử hoặc kiểm thử 6 Công việc lặp lại giảm đi",
        options: [
            "a) Lợi ích: 3, 4, 6 và 7. Rủi ro: 1, 2 và 5",
            "b) Lợi ích: 1, 2, 3 và 7. Rủi ro: 4, 5 và 6",
            "c) Lợi ích: 2, 3, 6 và 7. Rủi ro: 1, 4 và 5",
            "d) Lợi ích: 2, 3, 5 và 6. Rủi ro: 1, 4 và 7"
        ],
        correctAnswer: 3
    },
    {
        question: "Điều gì sau đây khuyến khích kiểm thử khách quan?",
        options: [
            "a) Kiểm thử đơn vị",
            "b) Kiểm thử hệ thống",
            "c) Kiểm thử độc lập",
            "d) Kiểm thử phá hủy"
        ],
        correctAnswer: 3
    }
    ,
    {
        question: "Trong những tuyên bố sau đây về cuộc xem xét các đặc tả, tuyên bố nào là đúng?",
        options: [
            "a) Cuộc xem xét nói chung không hiệu quả về chi phí vì các cuộc họp tốn thời gian và yêu cầu chuẩn bị và theo dõi.",
            "b) Không cần chuẩn bị hoặc theo dõi cuộc xem xét.",
            "c) Cuộc xem xét phải được kiểm soát bởi tác giả.",
            "d) Cuộc xem xét là một phương pháp kiểm thử tĩnh sớm có chi phí trên hệ thống."
        ],
        correctAnswer: 4
    }
    ,
    {
        question: "Xem xét danh sách sau đây các hoạt động trong quá trình kiểm thử: I Phân tích và thiết kế II Các hoạt động đóng kiểm thử III Đánh giá tiêu chí thoát và báo cáo IV Lập kế hoạch và kiểm soát V Triển khai và thực hiện Cái nào dưới đây đặt chúng vào thứ tự hợp lý?",
        options: [
            "a) I, II, III, IV và V",
            "b) IV, I, V, III và II.",
            "c) IV, I, V, II và III.",
            "d) I, IV, V III và II."
        ],
        correctAnswer: 2
    }
    ,
    {
        question: "Mục tiêu kiểm thử thay đổi giữa các dự án và vì vậy phải được nêu trong kế hoạch kiểm thử. Mục tiêu kiểm thử nào dưới đây có thể xung đột với tư duy đúng của người kiểm thử?",
        options: [
            "a) Chứng minh rằng hệ thống hoạt động trước khi chúng ta gửi nó đi.",
            "b) Tìm thấy càng nhiều lỗi càng tốt.",
            "c) Giảm thiểu mức độ rủi ro toàn bộ sản phẩm.",
            "d) Ngăn chặn các lỗi thông qua sự tham gia sớm."
        ],
        correctAnswer: 1
    }
    ,
    {
        question: "Những hoạt động kiểm thử nào được hỗ trợ bởi các công cụ chuẩn bị dữ liệu kiểm thử?",
        options: [
            "a) Quản lý và kiểm soát kiểm thử",
            "b) Đặc tả và thiết kế kiểm thử",
            "c) Thực hiện và đăng nhập kiểm thử",
            "d) Hiệu suất và theo dõi"
        ],
        correctAnswer: 2
    },
    {
        question: "Nếu bạn đang bay với vé hạng phổ thông, có khả năng bạn sẽ được nâng hạng lên hạng phòng doanh, đặc biệt nếu bạn giữ thẻ vàng trong chương trình thành viên thường xuyên của hãng hàng không. Nếu bạn không giữ thẻ vàng, có khả năng bạn sẽ bị 'đẩy ra khỏi chuyến bay' nếu nó đầy và bạn làm thủ tục đăng ký muộn. Điều này được mô tả trong Hình 7.1. Lưu ý rằng mỗi hộp (tức là, tuyến lệnh) đã được đánh số. Ba bài kiểm thử đã được thực hiện: Bài kiểm thử 1: Người giữ thẻ vàng được nâng cấp lên phòng doanh Bài kiểm thử 2: Người không giữ thẻ vàng ở lại ở hạng phổ thông Bài kiểm thử 3: Người bị đẩy khỏi chuyến bay Cần thêm bài kiểm thử nào để đạt 100% phủ quyết định?",
        image: Image7_1,
        options: [
            "a) Người giữ thẻ vàng ở lại ở hạng phổ thông và người không giữ thẻ vàng được nâng cấp lên phòng doanh.",
            "b) Người giữ thẻ vàng và người không giữ thẻ vàng đều được nâng cấp lên phòng doanh.",
            "c) Người giữ thẻ vàng và người không giữ thẻ vàng đều ở lại ở hạng phổ thông.",
            "d) Người giữ thẻ vàng được nâng cấp lên phòng doanh và người không giữ thẻ vàng ở lại ở hạng phổ thông."
        ],
        correctAnswer: 1
    },
    {
        question: "Xem xét các loại công cụ sau đây: V Công cụ quản lý kiểm thử W Công cụ phân tích tĩnh X Công cụ mô hình hóa Y Công cụ phân tích động Z Công cụ kiểm thử hiệu suất Trong số các công cụ này, công cụ nào là có khả năng được sử dụng nhiều nhất bởi các nhà phát triển?",
        options: [
            "a) W, X và Y",
            "b) V, Y và Z",
            "c) V, W và Z",
            "d) X, Y và Z"
        ],
        correctAnswer: 1
    },
    {
        question: "Test condition là gì?",
        options: [
            "a) Một đầu vào, kết quả mong đợi, điều kiện tiên quyết và điều kiện hậu quả",
            "b) Các bước cần thực hiện để đưa hệ thống đến một điểm cụ thể",
            "c) Một thứ gì đó có thể kiểm thử",
            "d) Một trạng thái cụ thể của phần mềm, ví dụ: trước khi thực hiện kiểm thử"
        ],
        correctAnswer: 3
    },
    {
        question: "Sự khác biệt quan trọng nhất giữa phương pháp đo lường và phương pháp dựa trên chuyên gia trong ước lượng kiểm thử là gì?",
        options: [
            "a) Phương pháp đo lường chính xác hơn so với phương pháp dựa trên chuyên gia.",
            "b) Phương pháp đo lường sử dụng các tính toán từ dữ liệu lịch sử trong khi phương pháp dựa trên chuyên gia phụ thuộc vào sự hiểu biết của đội ngũ.",
            "c) Phương pháp đo lường có thể được sử dụng để xác minh một ước lượng được tạo ra bằng phương pháp dựa trên chuyên gia, nhưng ngược lại không đúng.",
            "d) Phương pháp dựa trên chuyên gia mất thời gian hơn so với phương pháp đo lường."
        ],
        correctAnswer: 2
    },
    {
        question: "Nếu nhiệt độ giảm xuống dưới 18 độ, hệ thống sưởi sẽ được bật. Khi nhiệt độ đạt 21 độ, hệ thống sưởi sẽ được tắt. Bộ giá trị kiểm thử tối thiểu để bao phủ tất cả các phân vùng tương đương hợp lệ là gì?",
        options: [
            "a) 15, 19 và 25 độ",
            "b) 17, 18, 20 và 21 độ",
            "c) 18, 20 và 22 độ",
            "d) 16 và 26 độ"
        ],
        correctAnswer: 1
    },
    {
        question: "Trong những câu sau đây về kiểm thử chức năng, câu nào đúng?",
        options: [
            "a) Kiểm thử cấu trúc quan trọng hơn so với kiểm thử chức năng vì nó liên quan đến mã nguồn.",
            "b) Kiểm thử chức năng hữu ích trong suốt vòng đời của dự án và có thể được áp dụng bởi nhà phân tích kinh doanh, người kiểm thử, nhà phát triển và người dùng.",
            "c) Kiểm thử chức năng mạnh mẽ hơn kiểm thử tĩnh vì bạn thực sự chạy hệ thống và xem điều gì xảy ra.",
            "d) Kiểm thử kiểm tra là một dạng của kiểm thử chức năng."
        ],
        correctAnswer: 2
    },
    {
        question: "Mục đích của kiểm thử xác nhận là gì?",
        options: [
            "a) Xác nhận sự tin tưởng của người dùng rằng hệ thống sẽ đáp ứng nhu cầu kinh doanh của họ.",
            "b) Xác nhận rằng một khiếm khuyết đã được sửa chữa đúng cách.",
            "c) Xác nhận rằng không có thay đổi không mong muốn nào đã được thực hiện hoặc được khám phá do các thay đổi.",
            "d) Xác nhận rằng logic chi tiết của một thành phần tuân thủ theo mô tả chi tiết của nó."
        ],
        correctAnswer: 2
    },
    {
        question: "Những yếu tố thành công nào là cần thiết cho việc hỗ trợ công cụ tốt trong một tổ chức?",
        options: [
            "a) Mua công cụ tốt nhất và đảm bảo rằng tất cả các người kiểm thử đều sử dụng nó.",
            "b) Thích ứng quy trình để phù hợp với việc sử dụng công cụ và theo dõi việc sử dụng công cụ và các lợi ích.",
            "c) Đặt mục tiêu tham vọng về lợi ích của công cụ và các hạn chế thời gian để đạt được chúng.",
            "d) Áp dụng các thực hành từ các tổ chức thành công khác và đảm bảo rằng cách sử dụng ban đầu của công cụ được duy trì."
        ],
        correctAnswer: 2
    },
    {
        question: "Trong những câu sau đây, mô tả nào là phù hợp nhất cho kiểm thử tích hợp?",
        options: [
            "a) Kiểm thử thực hiện để phơi lỗ lỗi ở các giao diện và trong tương tác giữa các thành phần được tích hợp.",
            "b) Kiểm thử để xác minh rằng một thành phần sẵn sàng để tích hợp.",
            "c) Kiểm thử để xác minh rằng môi trường kiểm thử có thể tích hợp với sản phẩm.",
            "d) Tích hợp các bộ kiểm thử tự động phần mềm với sản phẩm."
        ],
        correctAnswer: 1
    },
    {
        question: "Theo từ điển ISTQB, debugging:",
        options: [
            "a) Là một phần của quy trình kiểm thử cơ bản.",
            "b) Bao gồm việc sửa chữa nguyên nhân gây ra sự cố.",
            "c) Liên quan đến việc cố ý thêm các khiếm khuyết đã biết.",
            "d) Thực hiện theo các bước của một thủ tục kiểm thử."
        ],
        correctAnswer: 2
    },
    {
        question: "Nguyên nhân gốc của một khiếm khuyết trong phần mềm tài chính tính lãi suất sai là gì?",
        options: [
            "a) Không đủ tiền để trả lãi suất đã tính toán.",
            "b) Thiếu các tính toán của lãi suất hợp nhất đã được bao gồm.",
            "c) Không đủ đào tạo cho các nhà phát triển về các quy tắc tính toán lãi suất hợp nhất.",
            "d) Sử dụng máy tính không chính xác để tính toán kết quả mong đợi."
        ],
        correctAnswer: 3
    },
    {
        question: "Giả sử giá cước bưu điện cho 'thư nhẹ' là: $0.25 cho đến 10 gram; $0.35 cho đến 50 gram; $0.45 cho đến 75 gram; $0.55 cho đến 100 gram. Các đầu vào kiểm thử nào (theo gram) sẽ được chọn bằng phân tích giá trị biên?",
        options: [
            "a) 0, 9, 19, 49, 50, 74, 75, 99, 100",
            "b) 10, 50, 75, 100, 250, 1000",
            "c) 0, 1, 10, 11, 50, 51, 75, 76, 100, 101",
            "d) 25, 26, 35, 36, 45, 46, 55, 56"
        ],
        correctAnswer: 3
    },
    {
        question: "Xem bảng quyết định sau đây. Cho bảng quyết định này, kết quả dự kiến cho các trường hợp kiểm thử sau là gì? TC1: Người đi công tác 26 tuổi nhưng có vi phạm hoặc tai nạn trong lịch sử lái xe của mình TC2: Du khách 62 tuổi với lịch sử lái xe sạch sẽ",
        options: [
            "a) TC1: Không cung cấp xe; TC2: Cung cấp xe với chi phí thêm.",
            "b) TC1: Cung cấp xe với chi phí thêm; TC2: Cung cấp xe mà không tính chi phí thêm.",
            "c) TC1: Không cung cấp xe; TC2: Cung cấp xe mà không tính chi phí thêm.",
            "d) TC1: Cung cấp xe với chi phí thêm; TC2: Không cung cấp xe."
        ],
        correctAnswer: 3
    },
    {
        question: "Kiểm thử thám hiểm là gì?",
        options: [
            "a) Quá trình dự đoán hoặc đoán nơi có thể xuất hiện khiếm khuyết.",
            "b) Một phương pháp có hệ thống để xác định các lớp đầu vào cụ thể tương đương.",
            "c) Kiểm thử được thực hiện bởi một kỹ sư đoàn viên.",
            "d) Thiết kế kiểm thử đồng thời, thực hiện kiểm thử, đăng nhập kiểm thử và học hỏi."
        ],
        correctAnswer: 4
    },
    {
        question: "Nếu một bộ kiểm thử đã đạt được 90% phủ mệnh đề, điều này có ý nghĩa gì?",
        options: [
            "a) 9 trên 10 kết quả quyết định đã được thực hiện bởi bộ kiểm thử này.",
            "b) 9 trên 10 câu lệnh đã được thực hiện bởi bộ kiểm thử này.",
            "c) 9 trên 10 bài kiểm tra đã được thực hiện trên bộ phần mềm này.",
            "d) 9 trên 10 câu lệnh yêu cầu về phần mềm này là đúng."
        ],
        correctAnswer: 2
    },
    {
        question: "Một kế hoạch kiểm thử được viết để mô tả cụ thể một cấp độ kiểm thử nơi mục tiêu chính là xây dựng sự tự tin trong hệ thống. Tên nào sau đây là có thể cho tài liệu này?",
        options: [
            "a) Master test plan",
            "b) System test plan",
            "c) Acceptance test plan",
            "d) Project plan"
        ],
        correctAnswer: 3
    }
    // {
    //     question: "",
    //     options: [
    //         "",
    //         "",
    //         "",
    //         ""
    //     ],
    //     correctAnswer: 
    // }
]