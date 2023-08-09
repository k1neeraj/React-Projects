import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p:2,
          "& h4": {
            fontWeight: "bold",
            my:2,
            fontSize: "2rem",
          },
          "& p":{
            textAlign:"justify",
          },
          "@media (max-width:600px)":{
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            }
          }
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores
          ipsa maiores, nesciunt aperiam adipisci totam recusandae. Eaque
          laboriosam ratione, sapiente, laudantium possimus enim porro tempore
          itaque modi ad optio eos quia voluptates delectus minima earum a sequi
          saepe fugit sint asperiores! Cum voluptatum molestiae eveniet, officia
          ab iusto asperiores odit placeat exercitationem! Ab consequatur
          distinctio nulla cumque voluptates doloribus. Nesciunt accusantium
          pariatur, repellendus voluptate numquam molestiae aperiam temporibus
          saepe atque distinctio praesentium dolorem delectus laboriosam vel.
          Facilis, beatae! Tempore, commodi porro ad nisi tempora, veritatis
          fugiat voluptatum voluptatem ea inventore aliquid pariatur. Sint,
          minus. Perspiciatis nobis quisquam cupiditate exercitationem?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fuga
          nesciunt expedita, ad eligendi facere at cum qui obcaecati dolor sit
          ipsa sed quibusdam exercitationem debitis hic ipsum facilis a.
          Repellat mollitia doloribus, vero voluptates dolorum sunt reiciendis,
          quae, rerum sint explicabo minus? Beatae sequi delectus nulla quidem
          magni nisi blanditiis quis. Eaque pariatur eligendi quisquam iure. Ab,
          doloremque culpa. Perspiciatis error aspernatur cumque eos quibusdam
          veritatis, tempore nisi est eveniet maiores quisquam veniam sunt
          inventore eaque fugiat aliquid aut esse deserunt ullam mollitia maxime
          tempora rem? Voluptates cumque aliquam incidunt, architecto
          reprehenderit repellat corrupti, officia, pariatur distinctio
          consequatur nisi?
        </p>
      </Box>
    </Layout>
  );
};

export default About;
