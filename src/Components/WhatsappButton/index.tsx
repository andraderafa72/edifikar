import styles from './styles.module.scss';

export function WhatsappButton () {
  return (
    <section className={styles.wppButton}>
      <a href="https://wa.me/5584987641132" target="_blank" rel='no-referer'>
        Fale conosco pelo WhatsApp
        <img src="/whatsapp.svg" alt="" />
      </a>
    </section>
  )
}
