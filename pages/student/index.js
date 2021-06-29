import styles from '../../styles/Student.module.css';

export default function StudentHome() {
  return (
    <div>
      <div className={styles.header}>Faculty Details</div>
      <div className={styles.faculty_table}>
        <table>
          <thead>
            <td>Sl. No</td>
            <td>Name</td>
            <td>ID</td>
            <td>Cabin No.</td>
            <td>Free Time Slot</td>
            <td>Specialization</td>
            <td>Time Table</td>
            <td>Book</td>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Gurpreet Singh</td>
              <td>789632</td>
              <td>52-305C</td>
              <td>09:00-10:30</td>
              <td>Networking</td>
              <td>09:00-17:00</td>
              <td>
                <button className={styles.book_btn}>Book</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Manpreet Singh</td>
              <td>456985</td>
              <td>52-305D</td>
              <td>09:30-11:30</td>
              <td>Web Development</td>
              <td>09:00-17:00</td>
              <td>
                <button className={styles.book_btn}>Book</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gurpreet Singh</td>
              <td>789632</td>
              <td>52-305C</td>
              <td>09:00-10:30</td>
              <td>Networking</td>
              <td>09:00-17:00</td>
              <td>
                <button className={styles.book_btn}>Book</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Gurpreet Singh</td>
              <td>789632</td>
              <td>52-305C</td>
              <td>09:00-10:30</td>
              <td>Networking</td>
              <td>09:00-17:00</td>
              <td>
                <button className={styles.book_btn}>Book</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Gurpreet Singh</td>
              <td>789632</td>
              <td>52-305C</td>
              <td>09:00-10:30</td>
              <td>Networking</td>
              <td>09:00-17:00</td>
              <td>
                <button className={styles.book_btn}>Book</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr></hr>
      <div className={styles.my_bookings}>
        <div className={styles.header}>My Bookings</div>
      </div>
    </div>
  );
}
