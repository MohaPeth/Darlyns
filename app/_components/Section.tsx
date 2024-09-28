import React, { PropsWithChildren } from "react";

const Section = (props: PropsWithChildren) => {
  return (
    <section max-w-3xl px-4 m-auto>
      {props.children}
    </section>
  );
};

export default Section;
