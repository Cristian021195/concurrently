import { MainLayout } from "../components/Layout"

export const About = () => {
  return (
    <MainLayout title="About">
      <div className="center-all">
        <div className="form">
          <p>If you want to know more about me, you can follow me at Facebook or Instagram, in the near future I will have a personal blog to share my thoughts and future projects.</p>
          <a href="https://cristian021195.github.io/portfolio/">Portfolio + CV</a>
        </div>
      </div>
    </MainLayout>
  )
}
