import Link from "next/link";
import StudentInfo from '../app/StudentInfo'; // 

export default function cprg306() {
  return (
    <div className="px-10 mx-10 my-20 text-xl" style={{ backgroundColor: "white" }}>
      <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">week 2</Link><br />
      <Link href="/week3">week 3</Link><br />
      <Link href="/week4">week 4</Link><br />
    </div>
  );
}
