import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const Index: NextPage = (): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.push("../home");
  }, []);

  return <div />;
};

export default Index;
