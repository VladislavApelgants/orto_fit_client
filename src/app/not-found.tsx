import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="">
        <div className="">
          {/* <Image
            src={'/img/404.png'}
            alt={'not found image'}
            width={360}
            height={360}
          /> */}
          <h3 className={""}>Сторінку не знайдено</h3>
          <p className={""}>Перейдіть на головну сторінку</p>
          <Link href="/">Перейти на головну</Link>
        </div>
      </div>
    </section>
  );
}
