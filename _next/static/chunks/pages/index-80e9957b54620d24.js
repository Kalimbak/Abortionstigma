(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    1466: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return L;
          },
        });
      var n = r(5675),
        s = r.n(n),
        a = r(7294),
        o = r(2660);
      var i = r(9499),
        l = r(4730),
        c = r(5893),
        d = ["children", "className"];
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function x(e) {
        var t = e.children,
          r = e.className,
          n = (0, l.Z)(e, d);
        return (0, c.jsx)(
          o.E.div,
          h(
            h(
              {
                initial: "offscreen",
                whileInView: "onscreen",
                viewport: { once: !0, amount: 0.8 },
                className: r,
              },
              n
            ),
            {},
            { children: t }
          )
        );
      }
      var u = [
          "Her age.",
          "Her occupation",
          "Some medical conditions",
          "Unintended pregnancy ",
          "Pregnancy resulted from rape",
          "Feeling not ready to be a parent",
        ],
        f = function () {
          var e = (0, a.useMemo)(function () {
            return {
              offscreen: { y: 150, opacity: 0 },
              onscreen: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.duration,
                  r = void 0 === t ? 2 : t;
                return {
                  y: 0,
                  opacity: 1,
                  transition: { type: "spring", duration: r },
                };
              },
            };
          }, []);
          return (0, c.jsx)("div", {
            className:
              "max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto",
            id: "feature",
            children: (0, c.jsxs)("div", {
              className:
                "grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12",
              children: [
                (0, c.jsx)(x, {
                  className: "flex w-full justify-end",
                  children: (0, c.jsxs)(o.E.div, {
                    className: "h-full w-full p-4",
                    variants: e,
                    children: [
                      (0, c.jsx)("h4", {
                        className: "text-2xl mb-5 font-bold text-orange-500",
                        children:
                          "The situation of clandestine abortion in Rwanda.",
                      }),
                      (0, c.jsx)("p", {
                        className: "text-left text-sm mb-4",
                        children:
                          "The health risk of an abortion is directly related to how and by whom the procedure is performed. Because of legal restrictions and stigma, women seeking abortions often resort to clandestine procedures, where safety cannot be assured.",
                      }),
                      (0, c.jsx)("p", {
                        className: "text-left text-sm mb-4",
                        children:
                          "Overall, half of all abortions in Rwanda are performed by untrained individuals and are considered to be very high risk, an estimated 34% are provided by traditional healers and 17% are induced by the women themselves.",
                      }),
                      (0, c.jsx)("p", {
                        className: "text-left text-sm mb-4",
                        children:
                          "About half of all abortions are provided by trained health professionals physicians (19%), nurses or medical assistants (16%) and trained midwives (14%). But many procedures do not take place in health facilities and result in complications.",
                      }),
                      (0, c.jsx)("p", {
                        className: "text-left text-sm mb-4",
                        children:
                          "Poor rural women are the most likely to go to untrained providers or to self-induce: Seventy-four percent of their abortions are from these sources, compared with 15% of those for non-poor women",
                      }),
                    ],
                  }),
                }),
                (0, c.jsx)(x, {
                  children: (0, c.jsxs)(o.E.div, {
                    className:
                      "flex flex-col items-end justify-center ml-auto w-full lg:w-9/12",
                    variants: e,
                    children: [
                      (0, c.jsx)("h3", {
                        className:
                          "text-3xl lg:text-2xl font-medium leading-relaxed  text-orange-500",
                        children:
                          "Some of reasons that may lead someone to illegal abortion",
                      }),
                      (0, c.jsx)("p", {
                        className: "my-2 text-black-500",
                        children:
                          "There are many reasons that may prompt someone to do abortion at any cost. Here are some:",
                      }),
                      (0, c.jsx)("ul", {
                        className: "text-black-500 self-start list-inside ml-8",
                        children: u.map(function (t, r) {
                          return (0,
                          c.jsx)(o.E.li, { className: "relative circle-check custom-list", custom: { duration: 2 + r }, variants: e, whileHover: { scale: 1.1, transition: { duration: 0.2 } }, children: t }, t);
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      r(6066);
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var g = function (e) {
        return (0, c.jsx)(
          "svg",
          v(
            v({}, e),
            {},
            {
              children: (0, c.jsx)("path", {
                d: "M14.19 6.418l-3.968-.577-1.774-3.595a.502.502 0 0 0-.897 0L5.779 5.841l-3.967.577a.5.5 0 0 0-.277.853l2.87 2.799-.677 3.951a.5.5 0 0 0 .725.527L8 12.682l3.548 1.866a.5.5 0 0 0 .725-.527l-.678-3.951 2.87-2.799a.499.499 0 0 0-.276-.853z",
                fill: "#FEA250",
              }),
            }
          )
        );
      };
      g.defaultProps = {
        width: "16",
        height: "17",
        viewBox: "0 0 16 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      };
      var w = function (e) {
        return (0, c.jsx)(
          "svg",
          v(
            v({}, e),
            {},
            {
              children: (0, c.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M10 19l-7-7m0 0l7-7m-7 7h18",
              }),
            }
          )
        );
      };
      w.defaultProps = {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      };
      var b = function (e) {
        return (0, c.jsx)(
          "svg",
          v(
            v({}, e),
            {},
            {
              children: (0, c.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M14 5l7 7m0 0l-7 7m7-7H3",
              }),
            }
          )
        );
      };
      b.defaultProps = {
        className: "w-6 h-6",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      };
      var j = function (e) {
        var t = e.children;
        return (0, c.jsx)("button", {
          className:
            "font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ",
          children: t,
        });
      };
      var y = function () {
          var e = (0, a.useMemo)(function () {
            return {
              offscreen: { y: 150, opacity: 0 },
              onscreen: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.duration,
                  r = void 0 === t ? 2 : t;
                return {
                  y: 0,
                  opacity: 1,
                  transition: { type: "spring", duration: r },
                };
              },
            };
          }, []);
          return (0, c.jsx)("div", {
            className:
              "bg-gradient-to-b from-white-300 to-white-500 w-full py-14",
            id: "pricing",
            children: (0, c.jsx)("div", {
              className:
                "max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center",
              children: (0, c.jsx)("div", {
                className: "flex flex-col w-full",
                children: (0, c.jsxs)(x, {
                  children: [
                    (0, c.jsx)(o.E.h3, {
                      variants: e,
                      className:
                        "text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed mb-10 text-orange-500",
                      children:
                        "Health consequences of unsafe/illegal abortion",
                    }),
                    (0, c.jsx)(o.E.p, {
                      variants: e,
                      className: "leading-normal text-left  mx-auto my-2 mb-4",
                      children:
                        "Forty percent of Rwandan women having an abortion are subject to complications that require medical attention. Yet women are likely to experience complications at different rates based on where they obtain the abortion and who performed it. The complication rate is as high as 54\u201355% among poor women in both rural and urban areas.",
                    }),
                    (0, c.jsx)(o.E.p, {
                      variants: e,
                      className: "leading-normal text-left  mx-auto my-2 mb-4",
                      children:
                        "Complication rates are highest for procedures that are induced by women themselves (67%) or are performed by traditional healers (61%), the kinds of procedures that poor rural women are more likely than other women to have.",
                    }),
                    (0, c.jsx)(o.E.p, {
                      variants: e,
                      className: "leading-normal text-left  mx-auto my-2 mb-4",
                      children:
                        "Thirty percent of all women who develop complications do not receive the medical attention they need. This proportion is especially high among poor women, 38\u201343% of these women do not get care in facilities, compared with 15\u201316% of non-poor women.",
                    }),
                    (0, c.jsx)(o.E.p, {
                      variants: e,
                      className:
                        "leading-normal text-left  mx-auto my-2 mb-4 mt-10",
                      children:
                        "Only in 2009, healthcare facility in Rwanda treated abortion complications on 17000 women who had illegal abortion. Briefly, here are some of the health related consequences of unsafe abortion:",
                    }),
                    (0, c.jsx)("div", {
                      className: "w-1/2",
                      children: (0, c.jsxs)("ul", {
                        className: "text-black-500 self-start list-inside ml-8",
                        children: [
                          (0, c.jsx)(o.E.li, {
                            className:
                              "relative circle-check custom-list text-left",
                            custom: { duration: 2 },
                            variants: e,
                            whileHover: {
                              scale: 1.1,
                              transition: { duration: 0.2 },
                            },
                            children: "Hysterectomy: Uterus removal",
                          }),
                          (0, c.jsx)(o.E.li, {
                            className:
                              "relative circle-check custom-list text-left",
                            custom: { duration: 2 },
                            variants: e,
                            whileHover: {
                              scale: 1.1,
                              transition: { duration: 0.2 },
                            },
                            children: "Post abortion infections",
                          }),
                          (0, c.jsx)(o.E.li, {
                            className:
                              "relative circle-check custom-list text-left",
                            custom: { duration: 2 },
                            variants: e,
                            whileHover: {
                              scale: 1.1,
                              transition: { duration: 0.2 },
                            },
                            children:
                              "Post abortion bleeding which can lead to death",
                          }),
                          (0, c.jsx)(o.E.li, {
                            className:
                              "relative circle-check custom-list text-left",
                            custom: { duration: 2 },
                            variants: e,
                            whileHover: {
                              scale: 1.1,
                              transition: { duration: 0.2 },
                            },
                            children: "Sterility",
                          }),
                          (0, c.jsx)(o.E.li, {
                            className:
                              "relative circle-check custom-list text-left",
                            custom: { duration: 2 },
                            variants: e,
                            whileHover: {
                              scale: 1.1,
                              transition: { duration: 0.2 },
                            },
                            children: "Post abortion mental illnesses",
                          }),
                          (0, c.jsx)(o.E.li, {
                            className:
                              "relative circle-check custom-list text-left",
                            custom: { duration: 2 },
                            variants: e,
                            whileHover: {
                              scale: 1.1,
                              transition: { duration: 0.2 },
                            },
                            children: "Post abortion hormonal imbalances",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        N = function (e) {
          var t = e.listUser,
            r =
              void 0 === t
                ? [
                    {
                      name: "Abortion is a common health intervention. It is safe when carried out using a method recommended by WHO, appropriate to the pregnancy duration and by someone with the necessary skills. ",
                      number: "390",
                      icon: "/assets/Icon/heroicons_sm-user.svg",
                    },
                    {
                      name: "Six out of 10 of all unintended pregnancies end in an induced abortion",
                      number: "20",
                      icon: "/assets/Icon/gridicons_location.svg",
                    },
                    {
                      name: "Around 45% of all abortions are unsafe, of which 97% take place in developing countries",
                      number: "50",
                      icon: "/assets/Icon/bx_bxs-server.svg",
                    },
                    {
                      name: "Unsafe abortion is a leading \u2013 but preventable \u2013 cause of maternal deaths and morbidities. It can lead to physical and mental health complications and social and financial burdens for women, communities and health systems.",
                      number: "50",
                      icon: "/assets/Icon/bx_bxs-server.svg",
                    },
                    {
                      name: "Lack of access to safe, timely, affordable and respectful abortion care is a critical public health and human rights issue.",
                      number: "50",
                      icon: "/assets/Icon/bx_bxs-server.svg",
                    },
                  ]
                : t,
            n = (0, a.useMemo)(function () {
              return {
                offscreen: { y: 150, opacity: 0 },
                onscreen: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.duration,
                    r = void 0 === t ? 2 : t;
                  return {
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring", duration: r },
                  };
                },
              };
            }, []);
          return (0, c.jsxs)("div", {
            className: "max-w-screen-xl mt-10 px-8 xl:px-16 mx-auto",
            id: "about",
            children: [
              (0, c.jsx)(x, {
                children: (0, c.jsxs)(o.E.div, {
                  className:
                    "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16",
                  variants: n,
                  children: [
                    (0, c.jsxs)("div", {
                      className:
                        " flex flex-col justify-center items-start row-start-2 sm:row-start-1",
                      children: [
                        (0, c.jsx)("h2", {
                          className:
                            "text-3xl font-bold text-left text-orange-500",
                          children: "Abortion",
                        }),
                        (0, c.jsx)("p", {
                          className: "text-black-500 mt-5",
                          children:
                            "Having a baby is one the most enjoyable moment. Friends come with gifts and some people held parties to welcome the newborn. However, nowadays some of the pregnancies are not wanted so that having that bay is no longer something to enjoy.",
                        }),
                        (0, c.jsx)("p", {
                          className: "text-black-500 mt-5",
                          children:
                            "In all corners of the world, people use different ways to avoid pregnancy. In Rwanda, there are some old culture traditions that people use to perform in order to avoid pregnancy. Some of women would bath in dump water to avoid being pregnant in old age. Some of the families used to do some ceremonies to protect their young girls to be pregnant.",
                        }),
                        (0, c.jsx)("p", {
                          className: "text-black-500 mt-5",
                          children:
                            "This shows that the issue of avoiding pregnancy is not recent as you may think. It was done even the introduction of different contraceptive methods. But with the modern medicine, preventing pregnant was made easy. However, still, a great number of girls and women have unwanted pregnancies. Some of them may wish to abort at any cost. In the country like ours where abortion is illegal, a considerable number of women and girls opt unsafe abortion.",
                        }),
                      ],
                    }),
                    (0, c.jsx)("div", {
                      className: "flex w-full",
                      children: (0, c.jsx)(o.E.div, {
                        className: "h-full w-full",
                        variants: n,
                        children: (0, c.jsx)(s(), {
                          src: "/assets/Abortion.png",
                          alt: "VPN Illustrasi",
                          quality: 100,
                          width: 500,
                          height: 500,
                          layout: "responsive",
                          style: { objectFit: "contain" },
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, c.jsxs)("div", {
                className: "container",
                children: [
                  (0, c.jsx)("h1", {
                    className:
                      "text-2xl text-center mb-10 font-bold text-orange-500",
                    children:
                      "What is abortion? What\u2019s the status of it in Rwanda?",
                  }),
                  (0, c.jsx)("p", {
                    className: "text-black-500 mt-5 text-left",
                    children:
                      "Abortion is defined as the termination of pregnancy before 20 weeks of pregnancy. Some of the countries even go up to 28 weeks of pregnancy",
                  }),
                  (0, c.jsx)("p", {
                    className: "text-black-500 mt-5 text-left",
                    children:
                      "Although, abortion in Rwanda is illegal, in 2009 about 60,000 women and girls had abortion, according to the research of University of Rwanda, School of Public health. On average it\u2019s 25 women in 1000 aged between 14 and 44.",
                  }),
                  (0, c.jsx)("p", {
                    className: "text-black-500 mt-5 text-left mb-5",
                    children:
                      "The number of illegal abortion is low compared to other neighbors\u2019 countries and other countries in sub Saharan Africa. The capital city of Rwanda, Kigali, counts one third of all abortions in Rwanda.",
                  }),
                ],
              }),
              (0, c.jsxs)("div", {
                children: [
                  (0, c.jsx)("h1", {
                    className:
                      "text-2xl text-center mb-10 font-bold text-orange-500",
                    children: "Why access to abortion matters ?",
                  }),
                  (0, c.jsxs)("div", {
                    className: "relative w-full flex",
                    children: [
                      (0, c.jsx)(x, {
                        className:
                          "rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10",
                        children: r.map(function (e, t) {
                          return (0,
                          c.jsx)(o.E.div, { className: "flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0 mb-5", custom: { duration: 2 + t }, variants: n, children: (0, c.jsxs)("div", { className: "flex flex-col mx-auto w-40 sm:w-auto", children: [(0, c.jsx)("div", { className: "flex  items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full", children: (0, c.jsx)("div", { className: "rounded-full", children: t + 1 }) }), (0, c.jsx)("div", { className: "flex flex-col", children: (0, c.jsx)("p", { className: "text-lg text-black-500", children: e.name }) })] }) }, t);
                        }),
                      }),
                      (0, c.jsx)("div", {
                        className:
                          "absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0",
                        style: { filter: "blur(114px)" },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function k(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(r), !0).forEach(function (t) {
                (0, i.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var P = function (e) {
        return (0, c.jsxs)(
          "svg",
          O(
            O({}, e),
            {},
            {
              children: [
                (0, c.jsx)("path", { fill: "none", d: "M0 0h24v24H0z" }),
                (0, c.jsx)("path", {
                  d: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z",
                  fill: "rgba(245,56,56,1)",
                }),
              ],
            }
          )
        );
      };
      P.defaultProps = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
      };
      var E = function (e) {
        return (0, c.jsxs)(
          "svg",
          O(
            O({}, e),
            {},
            {
              children: [
                (0, c.jsx)("path", { fill: "none", d: "M0 0h24v24H0z" }),
                (0, c.jsx)("path", {
                  d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z",
                  fill: "rgba(245,56,56,1)",
                }),
              ],
            }
          )
        );
      };
      E.defaultProps = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
      };
      var H = function (e) {
        return (0, c.jsxs)(
          "svg",
          O(
            O({}, e),
            {},
            {
              children: [
                (0, c.jsx)("path", { fill: "none", d: "M0 0h24v24H0z" }),
                (0, c.jsx)("path", {
                  d: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
                  fill: "rgba(245,56,56,1)",
                }),
              ],
            }
          )
        );
      };
      H.defaultProps = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
      };
      var M = function () {
          return (0, c.jsx)("div", {
            className: "bg-white-300 pt-44 pb-24",
            children: (0, c.jsxs)("div", {
              className:
                "max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4",
              children: [
                (0, c.jsxs)("div", {
                  className:
                    "row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ",
                  children: [
                    (0, c.jsxs)("p", {
                      className: "mb-4",
                      children: [
                        (0, c.jsx)("strong", {
                          className: "font-medium",
                          children: "COMPANY NAME HERE",
                        }),
                        " is simply dummy text of the printing and typesetting industry.",
                      ],
                    }),
                    (0, c.jsxs)("div", {
                      className: "flex w-full mt-2 mb-8 -mx-2",
                      children: [
                        (0, c.jsx)("div", {
                          className:
                            "mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md",
                          children: (0, c.jsx)(P, { className: "h-6 w-6" }),
                        }),
                        (0, c.jsx)("div", {
                          className:
                            "mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md",
                          children: (0, c.jsx)(E, { className: "h-6 w-6" }),
                        }),
                        (0, c.jsx)("div", {
                          className:
                            "mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md",
                          children: (0, c.jsx)(H, { className: "h-6 w-6" }),
                        }),
                      ],
                    }),
                    (0, c.jsxs)("p", {
                      className: "text-gray-400",
                      children: [
                        "\xa9",
                        new Date().getFullYear(),
                        " - company name",
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className:
                    " row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col",
                  children: [
                    (0, c.jsx)("p", {
                      className: "text-black-600 mb-4 font-medium text-lg",
                      children: "Quick Links",
                    }),
                    (0, c.jsxs)("ul", {
                      className: "text-black-500 ",
                      children: [
                        (0, c.jsx)("li", {
                          className:
                            "my-2 hover:text-orange-500 cursor-pointer transition-all",
                          children: "Home",
                        }),
                        (0, c.jsx)("li", {
                          className:
                            "my-2 hover:text-orange-500 cursor-pointer transition-all",
                          children: "Abortion Resources",
                        }),
                        (0, c.jsx)("li", {
                          className:
                            "my-2 hover:text-orange-500 cursor-pointer transition-all",
                          children: "Impact Model",
                        }),
                        (0, c.jsx)("li", {
                          className:
                            "my-2 hover:text-orange-500 cursor-pointer transition-all",
                          children: "Partnership",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className:
                    "row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col",
                  children: [
                    (0, c.jsx)("p", {
                      className: "text-black-600 mb-4 font-medium text-lg",
                      children: "Terms & Conditions",
                    }),
                    (0, c.jsxs)("ul", {
                      className: "text-black-500",
                      children: [
                        (0, c.jsx)("li", {
                          className:
                            "my-2 hover:text-orange-500 cursor-pointer transition-all",
                          children: "Declarations",
                        }),
                        (0, c.jsx)("li", {
                          className:
                            "my-2 hover:text-orange-500 cursor-pointer transition-all",
                          children: "Privacy Policy",
                        }),
                        (0, c.jsx)("li", {
                          className:
                            "my-2 hover:text-orange-500 cursor-pointer transition-all",
                          children: "Terms of Service",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className:
                    "row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col",
                  children: [
                    (0, c.jsx)("p", {
                      className: "text-black-600 mb-4 font-medium text-lg",
                      children: "Help Center",
                    }),
                    (0, c.jsxs)("ul", {
                      className: "text-black-500",
                      children: [
                        (0, c.jsx)("li", {
                          className:
                            "my-2 hover:text-orange-500 cursor-pointer transition-all",
                          children: "Tollfree:9999",
                        }),
                        (0, c.jsx)("li", {
                          className:
                            "my-2 hover:text-orange-500 cursor-pointer transition-all",
                          children: "Email:example@example.com",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        S = (r(1664), r(6261));
      var A = function () {
          var e = (0, a.useState)(null),
            t = e[0],
            r = e[1],
            n = (0, a.useState)(!1),
            s = n[0],
            o = n[1];
          return (
            (0, a.useEffect)(function () {
              window.addEventListener("scroll", function () {
                o(window.scrollY > 20);
              });
            }, []),
            (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)("header", {
                  className:
                    "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
                    (s ? " shadow-md pt-0" : " pt-4"),
                  children: (0, c.jsxs)("nav", {
                    className:
                      "max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4",
                    children: [
                      (0, c.jsx)("div", {
                        className: "col-start-1 col-end-2 flex items-center",
                        children: (0, c.jsx)("strong", {
                          children: "LOGO HERE",
                        }),
                      }),
                      (0, c.jsxs)("ul", {
                        className:
                          "hidden lg:flex col-start-4 col-end-8 text-black-500  items-center",
                        children: [
                          (0, c.jsx)(S.rU, {
                            activeClass: "active",
                            to: "about",
                            spy: !0,
                            smooth: !0,
                            duration: 1e3,
                            onSetActive: function () {
                              r("about");
                            },
                            className:
                              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                              ("about" === t
                                ? " text-orange-500 animation-active "
                                : " text-black-500 hover:text-orange-500 a"),
                            children: "Home",
                          }),
                          (0, c.jsx)(S.rU, {
                            activeClass: "active",
                            to: "feature",
                            spy: !0,
                            smooth: !0,
                            duration: 1e3,
                            onSetActive: function () {
                              r("feature");
                            },
                            className:
                              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                              ("feature" === t
                                ? " text-orange-500 animation-active "
                                : " text-black-500 hover:text-orange-500 "),
                            children: "Abortion Resources",
                          }),
                          (0, c.jsx)(S.rU, {
                            activeClass: "active",
                            to: "pricing",
                            spy: !0,
                            smooth: !0,
                            duration: 1e3,
                            onSetActive: function () {
                              r("pricing");
                            },
                            className:
                              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                              ("pricing" === t
                                ? " text-orange-500 animation-active "
                                : " text-black-500 hover:text-orange-500 "),
                            children: "Impact Model",
                          }),
                          (0, c.jsx)(S.rU, {
                            activeClass: "active",
                            to: "testimoni",
                            spy: !0,
                            smooth: !0,
                            duration: 1e3,
                            onSetActive: function () {
                              r("testimoni");
                            },
                            className:
                              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                              ("testimoni" === t
                                ? " text-orange-500 animation-active "
                                : " text-black-500 hover:text-orange-500 "),
                            children: "Partnership",
                          }),
                        ],
                      }),
                      (0, c.jsx)("div", {
                        className:
                          "col-start-10 col-end-12 font-medium flex justify-end items-center",
                        children: (0, c.jsx)(j, { children: "Get involved" }),
                      }),
                    ],
                  }),
                }),
                (0, c.jsx)("nav", {
                  className:
                    "fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ",
                  children: (0, c.jsx)("div", {
                    className: "bg-white-500 sm:px-3",
                    children: (0, c.jsxs)("ul", {
                      className:
                        "flex w-full justify-between items-center text-black-500",
                      children: [
                        (0, c.jsxs)(S.rU, {
                          activeClass: "active",
                          to: "about",
                          spy: !0,
                          smooth: !0,
                          duration: 1e3,
                          onSetActive: function () {
                            r("about");
                          },
                          className:
                            "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                            ("about" === t
                              ? "  border-orange-500 text-orange-500"
                              : " border-transparent"),
                          children: [
                            (0, c.jsx)("svg", {
                              className: "w-6 h-6",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, c.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                              }),
                            }),
                            "Home",
                          ],
                        }),
                        (0, c.jsxs)(S.rU, {
                          activeClass: "active",
                          to: "feature",
                          spy: !0,
                          smooth: !0,
                          duration: 1e3,
                          onSetActive: function () {
                            r("feature");
                          },
                          className:
                            "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                            ("feature" === t
                              ? "  border-orange-500 text-orange-500"
                              : " border-transparent "),
                          children: [
                            (0, c.jsx)("svg", {
                              className: "w-6 h-6",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, c.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                              }),
                            }),
                            "Abortion Resources",
                          ],
                        }),
                        (0, c.jsxs)(S.rU, {
                          activeClass: "active",
                          to: "pricing",
                          spy: !0,
                          smooth: !0,
                          duration: 1e3,
                          onSetActive: function () {
                            r("pricing");
                          },
                          className:
                            "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                            ("pricing" === t
                              ? "  border-orange-500 text-orange-500"
                              : " border-transparent "),
                          children: [
                            (0, c.jsx)("svg", {
                              className: "w-6 h-6",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, c.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                              }),
                            }),
                            "Impact Model",
                          ],
                        }),
                        (0, c.jsxs)(S.rU, {
                          activeClass: "active",
                          to: "testimoni",
                          spy: !0,
                          smooth: !0,
                          duration: 1e3,
                          onSetActive: function () {
                            r("testimoni");
                          },
                          className:
                            "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                            ("testimoni" === t
                              ? "  border-orange-500 text-orange-500"
                              : " border-transparent "),
                          children: [
                            (0, c.jsx)("svg", {
                              className: "w-6 h-6",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, c.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                              }),
                            }),
                            "Partnership",
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        C = function (e) {
          var t = e.children;
          return (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(A, {}), t, (0, c.jsx)(M, {})],
          });
        };
      r(9008), r(1163);
      function L() {
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsxs)(C, {
            children: [(0, c.jsx)(N, {}), (0, c.jsx)(f, {}), (0, c.jsx)(y, {})],
          }),
        });
      }
    },
    5557: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(1466);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [268, 774, 888, 179], function () {
      return (t = 5557), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
