import style from "./LandingPage.module.css";
import introVideo from "../../../assets/intro_vid.mp4";
import logo from "../../../assets/logo.png";
import decoration from "../../../assets/decoration.png";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className={style.landingPage}>
      <section className={style.intro}>
        <img src={logo} alt="Logo" className={style.logo} />
        <p className={style.description}>تأسست كلية التدريب المهني المتقدم في الأردن (CAVT) في عام 2022 بواسطة مؤسسة ولي العهد، بهدف تعزيز قطاع التدريب والتعليم المهني والتقني في الأردن (TVET) من خلال تقديم برامج تدريب مهني وتقني معتمدة وعالية الجودة، بأسعار معقولة، موجهة نحو المستقبل ومعززة بالتكنولوجيا عبر مجموعة متنوعة من المجالات التقنية والمهنية، ومتوافقة مع الاتجاهات العالمية، لضمان وجود قوة عاملة ماهرة قادرة على التكيف مع متطلبات سوق العمل المتطورة.
        </p>
        <div className={style.button} onClick={() => navigate("/interests")}>
تعرف على المزيد          <img src={decoration} alt="Decoration" className={style.decoration} />
          <img src={decoration} alt="Decoration" className={style.decoration} />

        </div>
      </section>
      <section className={style.videoSection}>
        <video autoPlay loop muted>
          <source src={introVideo} type="video/mp4" />
          متصفحك لا يدعم عرض الفيديو.
        </video>
      </section>
    </div>
  );
}
