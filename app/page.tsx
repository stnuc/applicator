import { MainTitle, SubTitle } from "@/components/svg";
import { Card } from "@/components/card";
import "@/styles/main.sass";
import IntroducePage from "@/components/introduce";
import { JoinUs } from "@/components/joinus";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <div className="main">
        <MainTitle></MainTitle>
        <SubTitle></SubTitle>
      </div>
      <IntroducePage></IntroducePage>
      <section className="last-card">
        {" "}
        <div className="introduce">
          <Card
            title={"Project"}
            content={
              "Project seminar는 자신이 진행한 프로젝트를 발표하는 자리입니다\n개인/팀 프로젝트를 자율적으로 진행하고 학기당 한 번 발표회를 가집니다\n프로젝트 주제는 모두 자유입니다\n다른 사람들과 자신의 프로젝트를 공유하세요!"
            }
            direct={{
              name: "Check our project",
              url: "https://github.com/stnuc/applicator-projects",
            }}
          ></Card>
        </div>
      </section>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </>
  );
}
