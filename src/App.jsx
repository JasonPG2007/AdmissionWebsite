import { useEffect, useRef, useState } from "react";
import "./assets/css/styles.css";
import "./assets/js/scripts";
import emailjs from "emailjs-com";

function App() {
  const form = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [date, setDate] = useState("");
  const [isAdult, setIsAdult] = useState(null);
  const [phone, setPhone] = useState("");
  const [phoneZalo, setPhoneZalo] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorPhoneZalo, setErrorPhoneZalo] = useState("");
  const [timeStudy, setTimeStudy] = useState("");

  // Hàm xử lý sự kiện thay đổi giá trị chọn
  const handleChangeTimeStudy = (e) => {
    setTimeStudy(e.target.value);
  };

  useEffect(() => {
    if (phone.length === 10) {
      setErrorPhone();
    } else if (phone.length > 0) {
      setErrorPhone("Số điện thoại không hợp lệ");
    } else {
      setErrorPhone(""); // Không hiển thị lỗi khi không có số
    }
  }, [phone]);

  useEffect(() => {
    if (phoneZalo.length === 10) {
      setErrorPhoneZalo();
    } else if (phoneZalo.length > 0) {
      setErrorPhoneZalo("Số điện thoại không hợp lệ");
    } else {
      setErrorPhoneZalo(""); // Không hiển thị lỗi khi không có số
    }
  }, [phoneZalo]);

  const handleBlur = () => {
    setIsFocused(date !== "");
    if (date > "2025-12-31") {
      setDate("2025-12-31"); // Reset về giá trị tối đa nếu nhập quá phạm vi
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);

    setDate(e.target.value);

    // Get date now
    const today = new Date();
    // alert(`Tháng hiện tại: ${today.getMonth() + 1}`);
    // alert(`Tháng đã chọn: ${selectedDate.getMonth() + 1}`);
    // alert(today.getMonth() + 1 - (selectedDate.getMonth() + 1));
    // Calculate Age
    const yearBirth = today.getFullYear() - selectedDate.getFullYear();
    const monthBirth = today.getMonth() + 1 - (selectedDate.getMonth() + 1);
    const dayBirth = today.getDate() + 1 - selectedDate.getDate();
    const isOver16 =
      yearBirth > 16 ||
      (yearBirth === 16 && monthBirth < 0) ||
      (yearBirth === 16 && monthBirth === 0 && dayBirth <= 0);

    setIsAdult(isOver16);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setErrorPhone("Số điện thoại không hợp lệ!");
      return;
    } else {
      setErrorPhone();
    }
    if (phoneZalo.length !== 10) {
      setErrorPhoneZalo("Số điện thoại không hợp lệ!");
      return;
    } else {
      setErrorPhoneZalo();
    }
    emailjs
      .sendForm(
        "service_jrgaq57",
        "template_ovkltxr",
        form.current,
        "36B1PoPlACVPxMI_K"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              loading="lazy"
              src="/img/Amazing-removebg-preview.png"
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            style={{
              color: "black",
              fontSize: "15px",
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Kỹ năng
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Khóa học
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Đội ngũ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Đăng ký
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">
            Giỏi Tiếng Anh – Tự Tin Giao Tiếp!
          </div>
          <div className="masthead-heading text-uppercase">Dạy tận tâm</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#contact">
            Đăng Ký Ngay{" "}
            <span
              style={{ fontSize: "18px" }}
              className="ms-2 fas fa-arrow-right"
            ></span>
          </a>
        </div>
      </header>
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Kỹ năng</h2>
            <h3 className="section-subheading text-muted">
              Trang bị kỹ năng vững chắc.
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-volume-up fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Phát Âm</h4>
              <p className="text-muted">
                Cải thiện phát âm chuẩn, tự tin giao tiếp như người bản xứ.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Phỏng Vấn</h4>
              <p className="text-muted">
                Chiến lược phỏng vấn hiệu quả, giúp bạn thành công.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-globe fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="my-3">Giao Tiếp</h4>
              <p className="text-muted">Tự tin nói chuyện, kết nối dễ dàng.</p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img loading="lazy" src="/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Pre-Kids</h2>
                    <p className="item-intro text-muted">
                      Tiếng Anh cho trẻ từ 4 - 5 tuổi.
                    </p>
                    <img
                      loading="lazy"
                      className="img-fluid d-block mx-auto"
                      src="/img/pre-kids.webp"
                      alt="..."
                      width={"600px"}
                    />
                    <p>
                      Khóa học Tiếng Anh cho Pre-Kids được thiết kế dành riêng
                      cho các bé từ 4 - 5 tuổi, giúp các bé làm quen với tiếng
                      Anh một cách tự nhiên và vui vẻ. Thông qua các hoạt động
                      tương tác như hát, kể chuyện, trò chơi và thủ công, bé sẽ
                      phát triển khả năng nghe, nói và phản xạ tiếng Anh ngay từ
                      giai đoạn đầu đời.
                      <br />
                      <hr />
                      <h3>Thông tin chung:</h3>
                      + Các lớp học sẽ kéo dài 60 phút/ buổi (bao gồm 5 phút
                      giải lao), tần suất lớp học là 2 buổi/ tuần. 08 buổi học
                      được tính là 01 tháng.
                      <br />+ Hình thức học: trực tuyến qua ứng dụng Zoom Pro.
                      Học viên cần cài app và học thông qua app để tối ưu công
                      cụ tương tác trong lớp.
                      <br />+ Yêu cầu mạng ổn định và thiết bị học có camera,
                      không gian học yên tĩnh
                      <br />+ Học phí đóng trước 7 ngày so với ngày học đầu tiên
                      của tháng tiếp theo để giữ chỗ trong lớp. Amazing
                      Education không tự động giữ chỗ cho học viên. Học phí đóng
                      3 tháng/ lần được giảm 5%. Học phí không bao gồm giáo
                      trình học (nếu có).
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Suất học: </strong>
                        <span className="out-of">Hết chỗ</span>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Khóa học khác
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal7"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img loading="lazy" src="/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Luyện âm Anh Mỹ cơ bản</h2>
                    <p className="item-intro text-muted">Huấn luyện phát âm.</p>
                    <img
                      loading="lazy"
                      className="img-fluid d-block mx-auto"
                      src="/img/pronounce-2.webp"
                      alt="..."
                      width={"600px"}
                    />
                    <p>
                      Khóa học Luyện Âm Anh Mỹ Cơ Bản giúp học viên cải thiện
                      phát âm, nhấn âm và ngữ điệu chuẩn Mỹ. Chương trình tập
                      trung vào thực hành qua bài tập nghe, nói, phản xạ và
                      chỉnh sửa lỗi sai phổ biến, giúp giao tiếp tự nhiên và rõ
                      ràng hơn. Phù hợp cho người mới bắt đầu!
                      <br />
                      <hr />
                      <h3>Thông tin chung:</h3>
                      + Các lớp học sẽ kéo dài 60 phút/ buổi (bao gồm 5 phút
                      giải lao), tần suất lớp học là 2 buổi/ tuần. 08 buổi học
                      được tính là 01 tháng.
                      <br />+ Hình thức học: trực tuyến qua ứng dụng Zoom Pro.
                      Học viên cần cài app và học thông qua app để tối ưu công
                      cụ tương tác trong lớp.
                      <br />+ Yêu cầu mạng ổn định và thiết bị học có camera,
                      không gian học yên tĩnh
                      <br />+ Học phí đóng trước 7 ngày so với ngày học đầu tiên
                      của tháng tiếp theo để giữ chỗ trong lớp. Amazing
                      Education không tự động giữ chỗ cho học viên. Học phí đóng
                      3 tháng/ lần được giảm 5%. Học phí không bao gồm giáo
                      trình học (nếu có).
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Suất học: </strong>
                        <span className="out-of">
                          Hết chỗ (có thể đăng kí cho lớp tháng 6/2025)
                        </span>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Khóa học khác
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal8"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img loading="lazy" src="/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Luyện âm Anh Mỹ nâng cao</h2>
                    <p className="item-intro text-muted">Phát triển kỹ năng.</p>
                    <img
                      loading="lazy"
                      className="img-fluid d-block mx-auto"
                      src="/img/pronounce-advanced.webp"
                      alt="..."
                      width={"600px"}
                    />
                    <p>
                      Khóa học Luyện Âm Anh Mỹ Nâng Cao giúp học viên hoàn thiện
                      phát âm, nhấn âm, nối âm và ngữ điệu tự nhiên như người
                      bản xứ. Chương trình tập trung vào luyện phản xạ, cải
                      thiện độ trôi chảy và chỉnh sửa chi tiết từng âm để giao
                      tiếp chuyên nghiệp, tự tin hơn.
                      <br />
                      <hr />
                      <h3>Thông tin chung:</h3>
                      + Các lớp học sẽ kéo dài 60 phút/ buổi (bao gồm 5 phút
                      giải lao), tần suất lớp học là 2 buổi/ tuần. 08 buổi học
                      được tính là 01 tháng.
                      <br />+ Hình thức học: trực tuyến qua ứng dụng Zoom Pro.
                      Học viên cần cài app và học thông qua app để tối ưu công
                      cụ tương tác trong lớp.
                      <br />+ Yêu cầu mạng ổn định và thiết bị học có camera,
                      không gian học yên tĩnh
                      <br />+ Học phí đóng trước 7 ngày so với ngày học đầu tiên
                      của tháng tiếp theo để giữ chỗ trong lớp. Amazing
                      Education không tự động giữ chỗ cho học viên. Học phí đóng
                      3 tháng/ lần được giảm 5%. Học phí không bao gồm giáo
                      trình học (nếu có).
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Suất học: </strong>
                        <span className="out-of">Hết chỗ</span>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Khóa học khác
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img loading="lazy" src="/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Kids</h2>
                    <p className="item-intro text-muted">
                      Tiếng Anh cho trẻ từ 6 - 11 tuổi.
                    </p>
                    <img
                      loading="lazy"
                      className="img-fluid d-block mx-auto"
                      src="/img/kids.webp"
                      alt="..."
                      width={"600px"}
                    />
                    <p>
                      Khóa học Tiếng Anh cho Kids dành cho trẻ em từ 6 - 11
                      tuổi, giúp bé xây dựng nền tảng tiếng Anh vững chắc thông
                      qua phương pháp học hiện đại và sáng tạo. Với các chủ đề
                      gần gũi, thú vị cùng hoạt động tương tác như trò chơi, bài
                      hát, kể chuyện và đóng vai, bé sẽ phát triển kỹ năng nghe
                      - nói - đọc - viết một cách tự nhiên và hiệu quả.
                      <br />
                      <hr />
                      <h3>Thông tin chung:</h3>
                      + Các lớp học sẽ kéo dài 60 phút/ buổi (bao gồm 5 phút
                      giải lao), tần suất lớp học là 2 buổi/ tuần. 08 buổi học
                      được tính là 01 tháng.
                      <br />+ Hình thức học: trực tuyến qua ứng dụng Zoom Pro.
                      Học viên cần cài app và học thông qua app để tối ưu công
                      cụ tương tác trong lớp.
                      <br />+ Yêu cầu mạng ổn định và thiết bị học có camera,
                      không gian học yên tĩnh
                      <br />+ Học phí đóng trước 7 ngày so với ngày học đầu tiên
                      của tháng tiếp theo để giữ chỗ trong lớp. Amazing
                      Education không tự động giữ chỗ cho học viên. Học phí đóng
                      3 tháng/ lần được giảm 5%. Học phí không bao gồm giáo
                      trình học (nếu có).
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Suất học: </strong>
                        <span className="still">
                          còn 9 suất 6-8 tuổi (Khai Giảng tháng 3/2025)
                        </span>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Khóa học khác
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img loading="lazy" src="/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Teens</h2>
                    <p className="item-intro text-muted">12- 14 tuổi.</p>
                    <img
                      loading="lazy"
                      className="img-fluid d-block mx-auto"
                      src="/img/teens.webp"
                      alt="..."
                      width={"600px"}
                    />
                    <p>
                      Tiếng Anh cho Teens từ 12 - 14 tuổi giúp học viên phát
                      triển toàn diện nghe - nói - đọc - viết, tự tin giao tiếp
                      và ứng dụng thực tế. Chương trình kết hợp thảo luận, tranh
                      biện, thuyết trình cùng giáo trình hiện đại, giúp nâng cao
                      tư duy phản biện và chuẩn bị cho các kỳ thi quốc tế như
                      TOEFL, IELTS.
                      <br />
                      <hr />
                      <h3>Thông tin chung:</h3>
                      + Các lớp học sẽ kéo dài 60 phút/ buổi (bao gồm 5 phút
                      giải lao), tần suất lớp học là 2 buổi/ tuần. 08 buổi học
                      được tính là 01 tháng.
                      <br />+ Hình thức học: trực tuyến qua ứng dụng Zoom Pro.
                      Học viên cần cài app và học thông qua app để tối ưu công
                      cụ tương tác trong lớp.
                      <br />+ Yêu cầu mạng ổn định và thiết bị học có camera,
                      không gian học yên tĩnh
                      <br />+ Học phí đóng trước 7 ngày so với ngày học đầu tiên
                      của tháng tiếp theo để giữ chỗ trong lớp. Amazing
                      Education không tự động giữ chỗ cho học viên. Học phí đóng
                      3 tháng/ lần được giảm 5%. Học phí không bao gồm giáo
                      trình học (nếu có).
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Suất học: </strong>
                        <span className="out-of">Hết chỗ</span>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Khóa học khác
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal4"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img loading="lazy" src="/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Giao tiếp tự tin</h2>
                    <p className="item-intro text-muted">12 - 22 tuổi.</p>
                    <img
                      loading="lazy"
                      className="img-fluid d-block mx-auto"
                      src="/img/communicate-confident.webp"
                      alt="..."
                      width={"600px"}
                    />
                    <p>
                      Khóa học Giao Tiếp Tự Tin giúp học viên rèn luyện kỹ năng
                      nghe - nói, phát âm chuẩn và phản xạ tự nhiên trong mọi
                      tình huống. Thông qua các hoạt động thực hành như hội
                      thoại, thảo luận, đóng vai, học viên sẽ xây dựng sự tự
                      tin, cải thiện lưu loát và sử dụng tiếng Anh linh hoạt
                      trong cuộc sống, học tập và công việc.
                      <br />
                      <hr />
                      <h3>Thông tin chung:</h3>
                      + Các lớp học sẽ kéo dài 60 phút/ buổi (bao gồm 5 phút
                      giải lao), tần suất lớp học là 2 buổi/ tuần. 08 buổi học
                      được tính là 01 tháng.
                      <br />+ Hình thức học: trực tuyến qua ứng dụng Zoom Pro.
                      Học viên cần cài app và học thông qua app để tối ưu công
                      cụ tương tác trong lớp.
                      <br />+ Yêu cầu mạng ổn định và thiết bị học có camera,
                      không gian học yên tĩnh
                      <br />+ Học phí đóng trước 7 ngày so với ngày học đầu tiên
                      của tháng tiếp theo để giữ chỗ trong lớp. Amazing
                      Education không tự động giữ chỗ cho học viên. Học phí đóng
                      3 tháng/ lần được giảm 5%. Học phí không bao gồm giáo
                      trình học (nếu có).
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Suất học: </strong>
                        <span className="out-of">Hết chỗ</span>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Khóa học khác
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal5"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img loading="lazy" src="/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Giao tiếp thông thường</h2>
                    <p className="item-intro text-muted">23 - 30 tuổi.</p>
                    <img
                      loading="lazy"
                      className="img-fluid d-block mx-auto"
                      src="/img/communication.webp"
                      alt="..."
                      width={"600px"}
                    />
                    <p>
                      Khóa học Giao Tiếp Thông Thường giúp học viên nâng cao kỹ
                      năng nghe - nói, phản xạ nhanh và sử dụng tiếng Anh tự
                      nhiên trong đời sống hàng ngày. Với phương pháp thực hành
                      qua hội thoại, tình huống thực tế và phát âm chuẩn, khóa
                      học giúp học viên tự tin giao tiếp hiệu quả trong học tập,
                      công việc và du lịch.
                      <br />
                      <hr />
                      <h3>Thông tin chung:</h3>
                      + Các lớp học sẽ kéo dài 60 phút/ buổi (bao gồm 5 phút
                      giải lao), tần suất lớp học là 2 buổi/ tuần. 08 buổi học
                      được tính là 01 tháng.
                      <br />+ Hình thức học: trực tuyến qua ứng dụng Zoom Pro.
                      Học viên cần cài app và học thông qua app để tối ưu công
                      cụ tương tác trong lớp.
                      <br />+ Yêu cầu mạng ổn định và thiết bị học có camera,
                      không gian học yên tĩnh
                      <br />+ Học phí đóng trước 7 ngày so với ngày học đầu tiên
                      của tháng tiếp theo để giữ chỗ trong lớp. Amazing
                      Education không tự động giữ chỗ cho học viên. Học phí đóng
                      3 tháng/ lần được giảm 5%. Học phí không bao gồm giáo
                      trình học (nếu có).
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Suất học: </strong>
                        <span className="out-of">Hết chỗ</span>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Khóa học khác
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal6"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img loading="lazy" src="/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Luyện phỏng vấn visa Mỹ</h2>
                    <p className="item-intro text-muted">Huấn luyện thực tế.</p>
                    <img
                      loading="lazy"
                      className="img-fluid d-block mx-auto"
                      src="/img/interview.webp"
                      alt="..."
                      width={"600px"}
                    />
                    <p>
                      Khóa học Luyện Phỏng Vấn Visa Mỹ giúp học viên chuẩn bị kỹ
                      lưỡng về ngôn ngữ, tâm lý và kỹ năng trả lời để vượt qua
                      buổi phỏng vấn tự tin, thuyết phục. Chương trình cá nhân
                      hóa theo hồ sơ từng học viên, tập trung vào các câu hỏi
                      thực tế, cách diễn đạt rõ ràng và phong thái chuyên
                      nghiệp.
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Suất học: </strong>
                        <span className="still">còn 05 suất</span>
                      </li>
                      <li>
                        <i style={{ color: "orange" }}>(Đặt lịch riêng)</i>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Khóa học khác
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Khóa học</h2>
            <h3 className="section-subheading text-muted">
              Tham gia và trải nghiệm ngay.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/img/pre-kids.webp"
                    alt="..."
                    style={{ height: "310px", objectFit: "cover" }}
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Pre-Kids</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Tiếng Anh cho trẻ từ 4 - 5 tuổi
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/img/kids.webp"
                    alt="..."
                    style={{ height: "310px", objectFit: "cover" }}
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Kids</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Tiếng Anh cho trẻ từ 6 - 11 tuổi
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/img/teens.webp"
                    alt="..."
                    style={{ height: "310px", objectFit: "cover" }}
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Teens</div>
                  <div className="portfolio-caption-subheading text-muted">
                    12- 14 tuổi
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal4"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/img/communicate-confident.webp"
                    alt="..."
                    style={{ height: "310px", objectFit: "cover" }}
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Giao tiếp tự tin
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    12 - 22 tuổi
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal5"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/img/communication.webp"
                    alt="..."
                    style={{ height: "310px", objectFit: "cover" }}
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Giao tiếp thông thường
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    23 - 30 tuổi
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal6"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/img/interview.webp"
                    alt="..."
                    style={{ height: "310px", objectFit: "cover" }}
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Luyện phỏng vấn visa Mỹ
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    Huấn luyện thực tế
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal7"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/img/pronounce.webp"
                    alt="..."
                    style={{ height: "310px", objectFit: "cover" }}
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Luyện âm Anh Mỹ cơ bản
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    Huấn luyện phát âm
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal8"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    className="img-fluid"
                    src="/img/pronounce-advanced.webp"
                    alt="..."
                    style={{ height: "310px", objectFit: "cover" }}
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Luyện âm Anh Mỹ nâng cao
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    Phát triển kỹ năng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Giới thiệu</h2>
            <h3 className="section-subheading text-muted">
              Khám phá sứ mệnh và giá trị cốt lõi của chúng tôi.
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  loading="lazy"
                  className="rounded-circle img-fluid"
                  src="/img/about/2.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Chúng Tôi Là Ai?</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Amazing Education là một đơn vị giáo dục chuyên về các khoá
                    đào tạo tiếng Anh ONLINE được sáng lập bởi cô Nguyễn Thị Trà
                    My (Amy), Thạc sĩ giáo dục chuyên ngành ngôn ngữ Anh.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  loading="lazy"
                  className="rounded-circle img-fluid"
                  src="/img/about/1.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Kinh Nghiệm</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Cô có 20 năm kinh nghiệm giảng dạy và 15 năm quản lí giáo
                    dục ở các hệ thống Anh ngữ lớn và các trường Quốc tế như Anh
                    văn Việt Mỹ, AMA Da Nang, Skyline và Thành phố giáo dục IEC.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  loading="lazy"
                  className="rounded-circle img-fluid"
                  src="/img/about/3.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Chương trình & Đội ngũ</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Cô đã tiên phong xây dựng và phát triển chương trình tiếng
                    Anh online, phá bỏ rào cản địa lí và đã giúp được rất nhiều
                    học viên không những ở Việt Nam mà còn ở nước ngoài. Cùng
                    với cô, đội ngũ giáo viên, trợ giảng của Amazing Education
                    luôn khiến học viên hài lòng vì phát âm và ngữ điệu chuẩn
                    Anh Mỹ, nghiệp vụ sư phạm cao cùng chương trình học chuẩn
                    Quốc tế.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  loading="lazy"
                  className="rounded-circle img-fluid"
                  src="/img/about/4.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Cơ hội học tập</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Hiện tại, cô Amy và một số giáo viên đang theo học tại Mỹ
                    nên sẽ mở thêm một số lớp với số lượng có hạn như thông tin
                    bên dưới.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Hãy Cùng
                  <br />
                  Viết Tiếp
                  <br />
                  Câu Chuyện
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Đội ngũ tuyệt vời
            </h2>
            <h3 className="section-subheading text-muted">
              Những chuyên gia tận tâm, giàu kinh nghiệm, luôn sẵn sàng đồng
              hành cùng bạn.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  src="/img/avatar_amy.jpg"
                  alt="member"
                  style={{ objectFit: "cover" }}
                />
                <h4>Amy Nguyen</h4>
                <p className="text-muted">CEO</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://www.facebook.com/amy.nguyen.vietnam"
                  aria-label="Parveen Anand Facebook Profile"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  src="/img/avatar_dua_xe_oto.jpg"
                  alt="member"
                  style={{ objectFit: "cover" }}
                />
                <h4>Nguyen Quoc Bao An</h4>
                <p className="text-muted">Kỹ sư phần mềm</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://www.facebook.com/nguyen.quoc.bao.an.231948"
                  aria-label="Diana Petersen Facebook Profile"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  src="/img/avatar_amy_2.jpg"
                  alt="member"
                  style={{ objectFit: "cover" }}
                />
                <h4>Amy Nguyen</h4>
                <p className="text-muted">Giáo viên</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://www.facebook.com/amy.nguyen.vietnam"
                  aria-label="Larry Parker Facebook Profile"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Đăng ký</h2>
            <h3 className="section-subheading" style={{ color: "#fff" }}>
              Bắt đầu hành trình của bạn ngay hôm nay!
            </h3>
          </div>
          <form
            ref={form}
            id="contactForm"
            data-sb-form-api-token="API_TOKEN"
            onSubmit={sendEmail}
          >
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Họ và tên học viên *"
                    data-sb-validations="required"
                    required
                    name="full_name"
                  />
                </div>
                <div className="form-group" style={{ position: "relative" }}>
                  <input
                    className="form-control"
                    id="date"
                    type="date"
                    name="birthday"
                    required
                    value={date}
                    inputMode="numeric"
                    onFocus={() => setIsFocused(true)}
                    onBlur={handleBlur}
                    onChange={handleDateChange}
                    style={{ padding: "20px" }}
                  />
                  <p style={{ color: "orangered" }}>
                    * Vui lòng kiểm tra kỹ ngày tháng năm sinh
                  </p>
                  <label
                    htmlFor="date"
                    style={{
                      position: "absolute",
                      left: "20px",
                      bottom: isFocused ? "40px" : "50px",
                      fontSize: isFocused ? "12px" : "16px",
                      color: isFocused ? "transparent" : "#666",
                      transition: "all 0.2s ease-in-out",
                    }}
                    className="d-block d-md-none"
                  >
                    mm/dd/yyyy
                  </label>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="address"
                    type="text"
                    placeholder="Địa chỉ (Số nhà + Tên đường)"
                    data-sb-validations="required"
                    name="address"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Quận/Huyện *"
                    data-sb-validations="required"
                    name="district"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    type="text"
                    placeholder="Thành phố *"
                    data-sb-validations="required,email"
                    name="city"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="country"
                    type="text"
                    placeholder="Quốc gia *"
                    data-sb-validations="required,email"
                    name="country"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="school"
                    type="text"
                    placeholder="Trường học (Nhập 'Đã tốt nghiệp' nếu không còn đi học') *"
                    data-sb-validations="required"
                    name="school"
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="time_study"
                    id="time_study"
                    className="form-control"
                    style={{ padding: "20px" }}
                    required
                    value={timeStudy}
                    onChange={handleChangeTimeStudy}
                  >
                    <option value="">
                      Bạn có thể học các lớp vào thời gian nào dưới đây?
                    </option>
                    <option value="Morning">Sáng</option>
                    <option value="Afternoon">Chiều</option>
                    <option value="Evening">Tối</option>
                    <option value="Weekend">Cuối tuần</option>
                    <option value="Other">Khác</option>
                  </select>
                  {timeStudy === "Other" && (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Thời gian khác (ghi rõ cụ thể)"
                      style={{ padding: "20px", marginTop: "10px" }}
                      name="time_study"
                    />
                  )}
                </div>
                <div className="form-group mb-md-0">
                  <select
                    name="programme"
                    id=""
                    className="form-control"
                    style={{ padding: "20px" }}
                    required
                  >
                    <option value="">Khóa học</option>
                    {/* <option value="Pre-kids">Pre-Kids</option> */}
                    <option value="Kids">Kids</option>
                    {/* <option value="Teens">Teens</option> */}
                    {/* <option value="Giao tiếp tự tin">Giao tiếp tự tin</option>
                    <option value="Giao tiếp thông thường">
                      Giao tiếp thông thường
                    </option> */}
                    <option value="Luyện phỏng vấn visa">
                      Luyện phỏng vấn visa
                    </option>
                    <option value="Luyện âm Anh Mỹ cơ bản">
                      Luyện âm Anh Mỹ cơ bản
                    </option>
                    {/* <option value="Luyện âm Anh Mỹ nâng cao">
                      Luyện âm Anh Mỹ nâng cao
                    </option> */}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="full_name_parent"
                    type="text"
                    placeholder="Họ và tên phụ huynh *"
                    name="full_name_parent"
                    data-sb-validations="required"
                    required
                    disabled={isAdult}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="relationship"
                    id=""
                    className="form-control"
                    style={{ padding: "20px" }}
                    required
                    disabled={isAdult}
                  >
                    <option value="">Mối quan hệ với học viên</option>
                    <option value="Father">Cha/Bố</option>
                    <option value="Mother">Mẹ</option>
                    <option value="Brothers and sisters">Anh chị em</option>
                    <option value="Relative">Bà con</option>
                    <option value="Guardian">Người giám hộ</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="phone_parent"
                    type="text"
                    name="phone"
                    placeholder="SĐT phụ huynh *"
                    data-sb-validations="required,email"
                    required
                    disabled={isAdult}
                    onInput={(e) => {
                      // Xóa mọi ký tự không phải số
                      e.target.value = e.target.value.replace(/\D/g, "");

                      // Giới hạn số lượng chữ số nhập vào là 10
                      if (e.target.value.length > 10) {
                        e.target.value = e.target.value.slice(0, 10);
                      }
                      setPhone(e.target.value);
                    }}
                  />
                  {errorPhone != null && (
                    <p style={{ color: "red" }}>{errorPhone}</p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Email phụ huynh"
                    name="email_parent"
                    data-sb-validations="required"
                    disabled={isAdult}
                  />
                </div>
                <div className="form-group mb-md-0">
                  <input
                    className="form-control"
                    id="zalo"
                    type="text"
                    name="zalo"
                    placeholder="Zalo / WhatsApp*"
                    data-sb-validations="required,email"
                    required
                    disabled={isAdult}
                    onInput={(e) => {
                      // Xóa mọi ký tự không phải số
                      e.target.value = e.target.value.replace(/\D/g, "");

                      // Giới hạn số lượng chữ số nhập vào là 10
                      if (e.target.value.length > 10) {
                        e.target.value = e.target.value.slice(0, 10);
                      }
                      setPhoneZalo(e.target.value);
                    }}
                  />
                  {errorPhoneZalo != null && (
                    <p style={{ color: "red" }}>{errorPhoneZalo}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase"
                type="submit"
              >
                Đăng ký{" "}
                <i
                  className="fas fa-paper-plane"
                  style={{ paddingLeft: "5px" }}
                ></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              {/* Copyright &copy; Amazing Education 2025 */}
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.facebook.com/amazingeducationn/"
                aria-label="Facebook"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">
                {/* Privacy Policy */}
              </a>
              <a className="link-dark text-decoration-none" href="#!">
                {/* Terms of Use */}
              </a>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <script src="js/scripts.js"></script>
      <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </>
  );
}

export default App;
