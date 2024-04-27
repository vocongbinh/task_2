import styles from "./home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { imageAssets } from "../../assets";
import ButtonComponent from "../../components/buttonComponent";
import { useState, useEffect } from "react";

function Home() {
  const [swiper, setSwiper] = useState();
  const [slidesPerView, setSlidesPerView] = useState(6);
  const listImages = [
    imageAssets.img1,
    imageAssets.img2,
    imageAssets.img3,
    imageAssets.img4,
    imageAssets.img5,
    imageAssets.img6,
    imageAssets.img1,
    imageAssets.img2,
    imageAssets.img3,
    imageAssets.img4,
    imageAssets.img5,
    imageAssets.img6,
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(6);
      } else if (window.innerWidth >= 600) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Hoạt động tiêu biểu từ cộng đồng giáo dục
        </h2>
        <p className={styles.description}>
          Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá
          trình giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={32}
            loop={true}
            modules={[Pagination, Navigation, A11y]}
            className={styles.mySwiper}
            onSwiper={(swiperInstance) => {
              setSwiper(swiperInstance);
            }}
          >
            {listImages.map((image, index) => (
              <SwiperSlide className={styles.swiperSlider}>
                <img
                  style={{
                    width: "100%",
                    height: 396,
                    borderRadius: 16,
                    objectFit: "cover",
                    marginTop: index % 2 === 1 ? 40 : 0,
                  }}
                  src={image}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <ButtonComponent
            className={styles.prevBtn}
            onClick={() => {
              swiper.slidePrev();
            }}
            icon={
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                data-testid="ArrowBackIcon"
              >
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
              </svg>
            }
          />
          <ButtonComponent
            className={styles.nextBtn}
            onClick={() => {
              swiper.slideNext();
            }}
            icon={
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                data-testid="ArrowForwardIcon"
              >
                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
