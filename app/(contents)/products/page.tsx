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
        />
        {/* <ProductCard
          image='/firstViewPC.jpg'
          title='カフェサイト'
          description='Next.jsを使って作成しました。左右に配置されているクッキーのアニメーションに力を入れて作成しました。'
          isDemo
          isOtherSite
          href='/'
        /> */}
      </div>
    </main>
  );
};

export default Products;
