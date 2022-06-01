export default function Index() {
  return null;
}

export const getServerSideProps = ({ res }) => {
  res.statusCode = 301;
  res.setHeader('Location', '/en/US');
  return { props: {} };
};
