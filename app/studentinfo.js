// /app/StudentInfo.js
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Name:- Sahil Bhamani</h1>
      <p>Course Section: CPRG 306 C</p>
      <Link href="https://github.com/sahilBhamani/cprg306-assignments.git">
        My GitHub Repository
      </Link>
    </div>
  );
};

export default StudentInfo;