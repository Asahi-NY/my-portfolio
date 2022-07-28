import React from "react";

export const About = () => {
  return (
    <div id="about" className=" flex w-full items-center p-2 py-4">
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className=" pt-4 text-xl font-bold uppercase tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">わたしについて</h2>
          <p className=" py-2 text-gray-600 ">
            ----- マネジメントもUI/UXもできるフロントエンジニアです。-----
          </p>
          <p className=" py-2 text-gray-600 ">
            大学にて認知心理学を専攻。卒業後、某大手Sierに新卒入社し、生命保険会社のシステム開発担当として要件定義から設計、開発、テスト、教育等の一連の業務に携わった。
            2018年度や2020年度は約200MMの大規模開発案件のプロジェクトリーダーとなり、各工程のマネジメント業務の遂行のみではなく、経験を生かした各種業務改善やシステム改善の提案等も実施。
          </p>
          <p className=" py-2 text-gray-600 ">
            2019年5月から約2ヶ月半サンフランシスコにて新規事業開発プログラムに参加。現地のデザイン会社と協業しつつ、UXリサーチやデザインシンキングを学ぶ。その後は、開発業務に重点を置きつつも、並行してデザインシンキングをクライアントに教育するための研修設計や講師の経験も有する。
            また、海外と日本の生命保険業界における新サービス・開発技術の調査・評価業務も実施や、業務外として従業員組合の本部代表として従業員のエンゲージメントの向上に向けた活動も実施。
            2021年6月よりITコンサル会社に転職し、2021年11月末にて退職。その後Webデザインや制作を独学で勉強し現在に至る。
          </p>
        </div>
        <div className=" m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-gray-400 duration-300 ease-in hover:scale-105">
          <img className=" rounded-xl" src="/assets/ABOUT.jpg" alt="/" width="1080px" height="840px"/>
        </div>
      </div>
    </div>
  );
};
