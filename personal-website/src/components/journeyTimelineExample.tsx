import styles from "@/styles/journeyTimelineExample.module.css";

export function JourneyTimelineExample() {

  /* JS CODE /*
  /*
  // VARIABLES
  const elH = document.querySelectorAll('.timeline li > div');

  // START
  window.addEventListener('load', init);

  function init() {
    setEqualHeights(elH);
  }

  // SET EQUAL HEIGHTS
  function setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }
  */

  return (
    <>
      <section className={styles.timelineContainer}>
        <ol className={styles.timelineWrapper}>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>1934</time> At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>1937</time> Proin quam velit, efficitur vel neque vitae,
              rhoncus commodo mi. Suspendisse finibus mauris et bibendum
              molestie. Aenean ex augue, varius et pulvinar in, pretium non
              nisi.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>1940</time> Proin iaculis, nibh eget efficitur varius,
              libero tellus porta dolor, at pulvinar tortor ex eget ligula.
              Integer eu dapibus arcu, sit amet sollicitudin eros.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>1943</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>1946</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>1956</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>1957</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>1967</time> Aenean condimentum odio a bibendum rhoncus. Ut
              mauris felis, volutpat eget porta faucibus, euismod quis ante.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>1977</time> Vestibulum porttitor lorem sed pharetra
              dignissim. Nulla maximus, dui a tristique iaculis, quam dolor
              convallis enim, non dignissim ligula ipsum a turpis.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>1985</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>2000</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
            </div>
          </li>
          <li className={styles.cardWrapper}>
            <div className={styles.milestoneCard}>
              <time>2005</time> In mattis elit vitae odio posuere, nec maximus
              massa varius. Suspendisse varius volutpat mattis. Vestibulum id
              magna est.
            </div>
          </li>
          <li className={styles.cardWrapper}></li>
        </ol>
      </section>
    </>
  );
}
