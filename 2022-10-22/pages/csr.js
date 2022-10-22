import { useEffect, useState } from 'react'
import SubLayout from '../components/SubLayout'
import Layout from '../components/Layout';

export default function CSR() {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log('client');
    setTime(new Date().toISOString())
  },[]);

  return (
      <>
        <h1 className="title">
          {time}
        </h1>
      </>
  )
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
