export default function Head() {
  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? (
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      ) : null}
      {process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION ? (
        <meta
          name="baidu-site-verification"
          content={process.env.NEXT_PUBLIC_BAIDU_SITE_VERIFICATION}
        />
      ) : null}
      {process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? (
        <meta
          name="msvalidate.01"
          content={process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION}
        />
      ) : null}
    </>
  );
}
