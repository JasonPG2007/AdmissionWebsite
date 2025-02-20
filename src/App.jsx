import { useRef, useState } from "react";
import "./assets/css/styles.css";
import "./assets/js/scripts";
import emailjs from "emailjs-com";

function App() {
  const form = useRef();
  const [isFocused, setIsFocused] = useState(false);
  const [date, setDate] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

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
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Threads
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Illustration
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
                      src="/img/pronounce.webp"
                      alt="..."
                      width={"600px"}
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Threads
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Illustration
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
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Threads
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Illustration
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
                      Tiếng Anh cho trẻ từ 4-5 tuổi.
                    </p>
                    <img
                      loading="lazy"
                      className="img-fluid d-block mx-auto"
                      src="/img/pre-kids.webp"
                      alt="..."
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Threads
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Illustration
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
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Explore
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Graphic Design
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
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Finish
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Identity
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
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Lines
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Branding
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
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Southwest
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Website Design
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
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Window
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Photography
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
                  src="/img/about/1.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
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
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
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
                  <h4>December 2015</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
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
                  <h4>July 2020</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt ut voluptatum eius sapiente, totam reiciendis
                    temporibus qui quibusdam, recusandae sit vero unde, sed,
                    incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
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
                    placeholder="Họ tên học viên *"
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
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(date !== "")}
                    onChange={(e) => setDate(e.target.value)}
                    style={{ padding: "20px" }}
                  />
                  <label
                    htmlFor="date"
                    style={{
                      position: "absolute",
                      left: "20px",
                      bottom: isFocused ? "40px" : "20px",
                      fontSize: isFocused ? "12px" : "16px",
                      color: isFocused ? "transparent" : "#666",
                      transition: "all 0.2s ease-in-out",
                    }}
                    className="d-block d-md-none"
                  >
                    Ngày sinh
                  </label>
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
                    id="address"
                    type="text"
                    placeholder="Địa chỉ"
                    data-sb-validations="required"
                    name="address"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Trường học (Nhập 'Đã tốt nghiệp' nếu không còn đi học') *"
                    data-sb-validations="required"
                    name="school"
                    required
                  />
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
                    <option value="Pre-kids">Pre-Kids</option>
                    <option value="Kids">Kids</option>
                    <option value="Teens">Teens</option>
                    <option value="Giao tiếp tự tin">Giao tiếp tự tin</option>
                    <option value="Giao tiếp thông thường">
                      Giao tiếp thông thường
                    </option>
                    <option value="Luyện phỏng vấn visa">
                      Luyện phỏng vấn visa
                    </option>
                    <option value="Luyện âm Anh Mỹ cơ bản">
                      Luyện âm Anh Mỹ cơ bản
                    </option>
                    <option value="Luyện âm Anh Mỹ nâng cao">
                      Luyện âm Anh Mỹ nâng cao
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="full_name_parent"
                    type="text"
                    placeholder="Họ tên phụ huynh *"
                    name="full_name_parent"
                    data-sb-validations="required"
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="relationship"
                    id=""
                    className="form-control"
                    style={{ padding: "20px" }}
                    required
                  >
                    <option value="">Mối quan hệ</option>
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
                    type="number"
                    name="phone"
                    placeholder="SĐT phụ huynh *"
                    data-sb-validations="required,email"
                    inputMode="numeric"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Email phụ huynh *"
                    name="email_parent"
                    required
                    data-sb-validations="required"
                  />
                </div>
                <div className="form-group mb-md-0">
                  <input
                    className="form-control"
                    id="link_fb"
                    type="text"
                    name="link_fb"
                    placeholder="Link Facebook phụ huynh*"
                    data-sb-validations="required,email"
                    required
                  />
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
