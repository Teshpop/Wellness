import { motion } from "framer-motion"
import logo from "../assets/WellnessLogo.png"
// import { Button } from "components/Button"

const nav = [
  {
    text: "Nuestro método",
    hash: "",
  },
  {
    text: "Programas",
    hash: "",
  },
  {
    text: "Sobre Nosotros + Equipo",
    hash: "",
  },
  {
    text: "Contacto",
    hash: "",
  },
]

const Index = () => {
  const icons = {
    initial: { x: 400 },
    animate: { x: 0, transition: { duration: 0.8 } },
  }

  return (
    <motion.footer
      transition={{ duration: 1.4, ease: "easeInOut" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#FFF]"
    >
      <div className="container mx-auto px-6 text-black text-sm py-4 flex flex-col gap-2">
        <section className="flex flex-col justify-start gap-6">
          <div className="flex flex-col gap-1 overflow-hidden">
            <motion.div
              transition={{ duration: 0.8 }}
              // initial={{ x: "-100%" }}
              // whileInView={{ x: -28 }}
              viewport={{ once: true }}
              className="w-16"
            >
              <img src={logo} alt={"logo"} />
            </motion.div>
            <div className="overflow-hidden">
              <motion.p
                transition={{ duration: 0.8, ease: "easeInOut" }}
                initial={{ y: "50%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="text-xs"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                aperiam nisi eius perferendis magni rem sequi! Suscipit, veniam
                aliquid porro dolores quaerat distinctio atque sunt accusamus
                sed, corporis animi facere qui explicabo eaque beatae tempora.
                Architecto soluta quidem provident qui?
              </motion.p>
            </div>
          </div>
          <motion.nav
            transition={{ duration: 0.6, ease: "easeInOut" }}
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {nav.map((link, index) => (
              <a
                key={index}
                className="text-main"
                href={link.hash ? `#${link.hash}` : link.url}
              >
                {link.text}
              </a>
            ))}
          </motion.nav>
        </section>
        <section className="flex justify-between items-center">
          <motion.span
            transition={{ duration: 0.6, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs mt-4"
          >
            @WELLNESS. All rights reserved
          </motion.span>
          <motion.div
            transition={{
              duration: 0.5,
              staggerChildren: 0.3,
              ease: "easeOut",
            }}
            whileInView={"animate"}
            viewport={{ once: true }}
            initial="initial"
            className="flex justify-end text-2xl gap-2"
          >
            <motion.div
              // onClick={() => router.push(footerInfo.links.discord)}
              key={"discord"}
              variants={icons}
            >
              {/* <Button.Icon><FaDiscord className="" /></Button.Icon> */}
            </motion.div>
            <motion.div
              // onClick={() => router.push(footerInfo.links.instagram)}
              variants={icons}
              key={"instagram"}
            >
              {/* <Button.Icon><FaInstagram className="" /></Button.Icon> */}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </motion.footer>
  )
}

export default Index
