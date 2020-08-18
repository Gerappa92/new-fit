export const scrollToRef = (ref) => {
  console.log(ref.current.offsetTop);
  window.scrollTo({
    top: ref.current.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};
