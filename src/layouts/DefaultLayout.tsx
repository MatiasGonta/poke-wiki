import { Header, Footer } from "@/components";

const DefaultLayout = ({ title, children, hideFooterOnScroll = false }: { title?: string, children: React.ReactNode | React.ReactNode[], hideFooterOnScroll?: boolean }) => {

  if (title) document.title = title;

  return (
    <>
      <Header />

      {children}

      <Footer hideFooterOnScroll={hideFooterOnScroll} />
    </>
  )
}

export default DefaultLayout