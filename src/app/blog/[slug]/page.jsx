import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/15079666/pexels-photo-15079666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/15079666/pexels-photo-15079666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>05.09.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil
          totam rem similique, voluptatum iste ea repudiandae doloribus ullam
          aut cum inventore quos reiciendis molestiae id, illo saepe fuga
          reprehenderit!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
