'use client';

import ProductCard from './(components)/ProductCard';

const Products = () => {
  return (
    <main className='w-full h-auto'>
      <div className='flex flex-col items-center gap-y-7 2xl:flex-row 2xl:flex-wrap'>
        <ProductCard
          image='/portfolio.png'
          title='ポートフォリオサイト'
          description='Next.jsを使って作成しました。出来るだけ必要な情報が得れるように作成しました。'
          isOtherSite={false}
          href='/'
          isGithub
          githubHref='https://github.com/Krudaovo/next-portfolio'
        />
        <ProductCard
          image='/firstViewPC.jpg'
          title='カフェサイト'
          description='Next.jsを使って作成しました。左右に配置されているクッキーのアニメーションに力を入れて作成しました。'
          isDemo
          isOtherSite
          href='https://next-cafe-demo.vercel.app/'
          isGithub
          githubHref='https://github.com/Krudaovo/next-cafe-demo'
        />
        <ProductCard
          image='/tab_menu.png'
          title='タブメニュー'
          description='マウスカーソルの位置に応じてタブメニューがアニメーションするWEBサイトです。'
          isDemo
          isOtherSite
          href='https://tab-menu-demo.netlify.app'
          isGithub
          githubHref='https://github.com/Krudaovo/tab-menu'
        />
        <ProductCard
          image='/hover_image.png'
          title='ホバーイメージ'
          description='テキストにホバーするとマウスカーソルのすぐ横に画像が現れるアニメーションのWEBサイトです。'
          isDemo
          isOtherSite
          href='https://text-hover-fadein-image.netlify.app'
          isGithub
          githubHref='https://github.com/Krudaovo/textHighlight'
        />
        <ProductCard
          image='/smooth_scroll.png'
          title='スムーズスクロール'
          description='gsapのScrollSmootherを使ってスクロールするスピードに応じで画像が傾くアニメーションを実装しています。'
          isDemo
          isOtherSite
          href='https://smooothscroll.netlify.app'
          isGithub
          githubHref='https://github.com/Krudaovo/smooth-scroll'
        />
        <ProductCard
          image='/text_fade.png'
          title='テキストフェード'
          description='特定の位置にスクロールされると画面中央のテキストがフェードインするアニメーションを実装しています。'
          isDemo
          isOtherSite
          href='https://fade-scroll.netlify.app'
          isGithub
          githubHref='https://github.com/Krudaovo/typegraphy?tab=readme-ov-file'
        />
      </div>
    </main>
  );
};

export default Products;
