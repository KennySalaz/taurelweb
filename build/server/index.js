import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShip, faTruckMoving, faFileAlt, faGlobeAmericas, faCube, faWarehouse, faTrophy, faUsers, faShieldAlt, faHandshake, faChartLine, faMapMarkerAlt, faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation as Navigation$1, EffectFade } from "swiper/modules";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const taurelLogo = "/assets/logo-BOP-HwO3.png";
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      className: `navigation ${scrolled ? "scrolled" : ""}`,
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { type: "spring", stiffness: 100 },
      children: /* @__PURE__ */ jsxs("div", { className: "nav-container", children: [
        /* @__PURE__ */ jsx("div", { className: "logo-container", children: /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("img", { src: taurelLogo, alt: "Taurel Logo", className: "logo" }) }) }),
        /* @__PURE__ */ jsx("nav", { className: "desktop-nav", children: /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Inicio" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contactanos", children: "Contáctanos" }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "special-links", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "login-link", children: "Empleo" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "track-link", children: "Rastrea tu embarque" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "mobile-menu-button", onClick: toggleMobileMenu, children: /* @__PURE__ */ jsx("span", { className: `hamburger ${mobileMenuOpen ? "open" : ""}` }) }),
        /* @__PURE__ */ jsx("div", { className: `mobile-nav ${mobileMenuOpen ? "open" : ""}`, children: /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", onClick: () => setMobileMenuOpen(false), children: "Inicio" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contactanos", onClick: () => setMobileMenuOpen(false), children: "Contáctanos" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", onClick: () => setMobileMenuOpen(false), children: "Empleo" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", onClick: () => setMobileMenuOpen(false), children: "Rastrea tu embarque" }) })
        ] }) })
      ] })
    }
  );
};
const LinkedinIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQzSURBVHgB7VlLSBtBGJ7dGK2P2PbQFpoGevHiSVCQFry0B3upXkqP4slDqdQeevco9CKCWvqyN8FDEQoK0ougFKvFR6W1iD20CoqPPBqamGR3+v3JRDbJ7CYbXQMlH0z28e/88+0//8x8O2GsjDIyoFjYVBROZXJy0ndwcNDW2dnpjUQiFznnbhQFIDsT55qu6wqzAVVVqURR72hlZWVreXn5U39//5FoW7fjy00/Gxsbd0DGzwXgmDsFg++10dHRqyKYBQXART/7+/svyUkCIH/8fKDHYjFqj8fj8TbBJz9pv9//hMiiaLwEQLsxOk5NTd1IB9AMSnd39wVRL85LCESYgvUrb3Tn5uaeOpmrNpAkMT4+ft2YFmo24dbW1gdWLwQfGZfMOSjUVk1NzT1jOzmENU27gilK6gHdlKCpbGdnZ3Rra+sFOaVBwpxiDB4ej+em5UPRaHRH2j+pPNHGxsYupJ/t7e2twr2Y7lAOkdtgMDiSj/CemQNM7o+zgzA/P/+IOwgsWG+NDaoSzqZ5iXQJs6x5EWnyhzmI9GpqCkR4V/amIEvdfpT2IwoNwgNhcwSHh4dvjPxUViCw5iuIJukIP9b8rtnZ2S6cB3HvMmkCp4A2Mnq0gtmA2+1WMRAuNTU1vaNrnNM96jKz5TNtS3erIrFZAimhF00YXR9xuVxfcFpN14jsX0iNloqKimrYorAtCRuR0Y+Pj1sqKytJyWGwB8chptZ9Pp+nvr6+o66u7jbqaKij5iFeXA4TwuHw5xxvnC+SDfVWJDa+u7t7X9bOwMAApddPzOOU/7pFDr9ipyC8JiG1Sjbo5O/G+4ODg9cQ4UZmLhNVUX8PvaQVStix0dLX17dXVVX1TVwauzVNnnJTmZmZuSvSoiA4N7xTUIaGhjyhUGggEAi8npiYaGIp8ifttre3r+MQ4LxIWXJWKUFkMfX5yIapjz4Eknm6vb39MNsHtMlcyVOC3qW5ufk96QzMIgzdrmBS4F6vN0cb4GUL/ha0Na3ZRW1trZcZBhyRlrVppg5lkEXY1pevFdCjmsTfqTS004PuzFEmXAD++5TIGAO2BHxeMV08TP1CYGXYZIRjzBzJD86enh43FeM9vEyOjfbbJD707Oeg6OKyxmj1w0IWZFaAevpqtuqI1SqjQOAkjzIbfOWIGhDQsp8TH7FSxTYyMvLMyC8nwmh43WxdFxN/RiG9S0eZjQR/tg8IIjX7OSW1cuTM/8SjoaFhkVlhenr6lvhqL/X2T3JTkOXZxVRElH+LXctSgVKMNmyeswLgWl1drU2+YiJRig1BXXyF/BB8CtI7ruHh4TpU2kNlcnIu2656ChSoj3bInpCmH+wVd0AHL8FfCIXY62dcKBhRFDTl/4A94UYrsvmUWdqenDbw/4O6sLDgZjZhpXch6Pnm5mbMsChltFlGGXnwD9VoRW4LoArlAAAAAElFTkSuQmCC";
const FacebookIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQVSURBVHgB7VhPSBRRGP9md9wli8yUMEitBEWXpIOUgjcvCh0DD1IXoehcHYMuUgTRIc+KwR7sKAiCqBehLSINLUtQFhRXEF0Xdxd3d2Zfv7eOts7Mzs7OjLrC/uDt7Lx5733f+773/XkfUQklWIagtKKiafRRRJOmpqbqGxoaXtXV1XXhvQLNi+ZijJFt7gSBNxlrJfDc29jY+LKwsPC2u7v7Jz670eRC1uMMUyKRmEin0yzNfxjj7cRwQOKIxo9sPjSbzcGwhIlBSZLqRFHkInXR6YGBLgPdFP5fgAa4xKXsAXrMSFtbW5+x83pMzDXmJCGAriuVSnkUiXOGjc/44OBglaIumZ0tZH5kZmdnfWqm1VJkbW1tjzCYG8hpS1iNjLHX1ta+4HwZjozFYuOy7IyQFeM6embEp6yd3WcwP51MJpfUPGqsE4Oqy8vLyQ5AS4KmRO7G1tbWpuCFvo2Ojq77fL5L7e3tLR6Pp62iouKe2+021CbmC5hbmZdgOBxeZDaATaf4c3l5+YERnWg0umxyybB6rmanGOQm65DKysrEQCBwq7GxcZwMrB5CLCNz0KyhOR7MRqTDsRB3d3efd3R0BBVi9sOmzhpOegjmcrmoqqrqg7JuNjGN9iCcFFmESM5BiEQiATpgVs2wHI/H33m93sfwHi5oRMAxukoW4STTXHrfdbrlUCj0Gh7jJTTBtWE7a3Sa6bhef01NzVN2YCyOpLmORj0DKV7mPpecokPnEJaZhrYldR8M7VqO4ZoQi/RTIouwfKZ5Fuj3+xvgBa7wd573AiGdocLMzMzdzc3NjEeBQXKGU729vYvkFLa3t5fMxFbkBLEcSwh53mlgYOA6M4/8YdwsDOyK5Xnnc2+SDZyJIfb19d2xky7YMcRcVNUhW2M3yPB8djygZUPEPc47Pz8/DN98Sem6iOZvbW31q4ZKq6urowjjmXIAwngE5YiH5CTMGiLTKSkgF3+vtyY+xc3MP3FDJB2vAJUnc4xNm5lvFi4dwlTsOA9hXCNFPaYTVETgF3J1n4ZpeIMIWSdATgORV5Puapje2dn5S8UDhvLYurpTwzRu0p/IIvjNhBwEfLoQDAaH843LHHr4xgh2KLECAS290VsUn6KsQOCoZeon2XwdQlPL4wNQaLmPiOfmlSIqAJB0QUXwXFDoikhhe0inFKHnPYSmpqY/+/v7XWBChIpkcqZ+YQa8Np3mdFFTfIZcfYIKCEKZzYyNjVXjmAQUdeVVKQh91OUEtxyDY3DsibLa78nJydvKVN1ql9EuDr+xnp4eb39/f8vc3NwNpJWVKFB61INx1fKurKx87ezs1JQRUKR/gg1p/KFSYEyNjIxEmpubQ9PT07+Ghob26H+xx5aGC4nteW8uJZRQwnH8A+ow/C+3QUVRAAAAAElFTkSuQmCC";
const InstagramIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAsCAYAAADxRjE/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaTSURBVHgB7Vh7SJVnGH8953hNzQuo5YZKMs022jKsNWPCNkoSg8DYHxsrGwUbRbQauzCoiI2wy1gU2Nblj7bBGrUuOIVCF0TZVMq5OSdueGvO+/1ybt9+v8/vyPEczzmvfl7+8QffeS/nvTzP8z639xViEYuYEfy0byH2ndEAf3yWs2fPJufl5R0LDw/PDAwMDBBziM7Ozi6r1fpDTk7OscrKSgu6DPjssvNJsBgZGSlSACxkV+YYdrtd/Ww2m9pub2/P02gxyBBs5M/Y2Nhji8ViJ5R5Bgi3aITvErJoaWn5FNJVBaAsECArM8uCgoIYhyCd4abTZBaThAEQCwiqCk785yVLlmxx/c/k3Dh9+vSLKHzRS6Y4xg8M4mBaagMCAix+gLdJ+JsKGxUTE7MSZSS67NqcKecZjUYREhKSJXzhzp07Od7UGHqu6ltHR8c3Fy5cCBMzxM2bN1OxVC3VEBK1etEUW3Z2dqDr/EmSNpvNNk8CwyZWf39/U21t7QtpaWk17MvKyjJh0biBgQEu7Ms9GZYuXTpw6NCh9tzc3D/RXtnd3V2AvoPa3KmOVwkNDVW8rlpcXLzZg2Go0rh27dpzjrGDg4PfUfjK9NE9NDS01UlQF/F5GmtFnHCLD1LGhsnGnp6eT7Zt2/aX1h5CsHlTdr42x0oDR/kUuvrT8PDwV+yHPeTjBHvpXmXXktoURqdERUV9wTqkch96GGQymaTnE1A7E9ThQ6z1PA0wODj4/aqqqpf5X3V19Xvokl5LZiANr4wVeJdlkMoGWLar1dvoolDacfQMTFfB3C24rEb+yajK8t69e98LzY7QV7Fq1aqLrBcWFt7y4XymTbRfQ0PDA1ZAxEZH3wRH43ptHB0dPb5nz54gGM5LOPLtUJ/coKCgxMuXLy/DqTwBEwLqVVlaWprY39//AYjMwLikw4cPG86dOzeIpUaFJEwyg+Dgx1hi4xDnfhoojtsfUtsAYlXGQERERkbGGpxG36ZNmyp37tzZhm8NkyEwnQePU68xa0NhKCsrUxMjei4wIUOOHNHYwHEirsZigjq87SAY0i6FhLMwnjrMefQyeWFhYT9C2tvR/hvEJ6BuwP8MzzbHQprKSUFPqFYg5f9A8BUxzthjbPwqqw795Eng/6utra2vs33+/Pk3SLDQCT0LUNdVgm/fvp2OYrXmUSYkBqZMINy2fPny62xD5xvAXK/QCV1cd3V1lbNct24dj55VtyMG4Ub8F1pUVPQM2/AsdUIndBGNAKHORxi3eBtHdWlra1MZgms0ehjmPVw7QRfRqampr7Csqam5oknabWMt0nXm5+c3s42gkix0QpchxsXFvcMKEyB4hWJ8lOaEh2HEYaTDLeQ1tsvLy1ejiBA6ocsQQVM4QvPHbMDVZeNeeVw46TW8SX9TU1NabGzsb2zDf5dgjnSO4QlSRENa6kZM/CdNNhiskZGRnyOZUrM23No/omT37dv37JEjRyJRj0pMTGQaqkD/f8FJxHryx2BGzCrRCBqq8WBDs5jMDF2aJSIiglnb9f3796tHf+bMmRZERtW1Id/gTeUpcpaNcIlkfhLRCOsqtYiGs5owiaSkpLUsIclSrWvC4BjGUdihHluRUPUgHP/T29t7F3p8H8T2ZWZm/k4Ju2aF2nNBIxhXdu/ezfQgWMwEHi4BvH8NO8ag/gQ5hE3RB94zlbq6OtVAKyoqtjjePGbrEsALbHB9ff27bCAUr8VR2jWDkvatTrBirgHS/zYlJeUuO9LT0wvFNF6TpNSDoTg5OfnrS5cuRSAUM5AEQId/FTN76zP09fUdBONvsQEj/gxRMt7VyL3B5EKcp+u8kRfbHTt2dK9YsSIeevgvutefOnUqCnPS4OqCeNzCB7HR0dFdeLOrhpFa2YG8ehcywKNUAyGZcbqhpKQkx5siwsjUiyyytqNT6Zosbty4EQv1eKC933m7HNv27t3r9oQwSbInT55cf+DAgQfeNqSqMBfW0s+6xsbGP0CAWfhQFdpAfHx8NC4Ua0BMNAnmg4yPeXwEchPOpCN5+PBhFenCon6eXoyYtWlVSiIlISEhRUwDyvgFQfGV9DNnwQWiQsgAl9hCSkVZQDjeWU6cOJEqJJyFSZNGJ46cjnPeiSfBfC6DwX6p0STlVVTC+dZGh6+9Uc/Xw7q6D5Kw4860yELV20ePHm1GSH6CdUbwmef4629ubr4FxDvTMBW8iZ66pGif+tgo5hB4SrC60DSTaLuIRfwPHqjFkQ/EAkIAAAAASUVORK5CYII=";
const phone = "/assets/phone-DC_oiJiv.png";
const location = "/assets/location-DpgSoAnv.png";
const bandera = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAdCAYAAADGgB7AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANKSURBVHgBzVdNaBNNGH5mZjdpN21iWys17cf3yYeCYhUEPXgRxN+LP+hNBBVBBBUP4sWL4A+IioioeBE8COLfRTyJehIRUdGDVhCl/qAx/jRp2k2yM/M6s2mxCppEsJsHZnYSZneeffaZ930H+BEM0YFhzPps7J87NyC5aQWOTpmGaTKAxPiAD+WgXj/H6flbcMn8dk0LRomJp1cwd/pS3NV9IEZgbJy100nT2vDM7cQMS3ZUPqISSD+G5BwOIoISoFdZnJy6BNu5JXVuL9ZSv6EZISkLoUBTZmGjHVti+JxDV5SuHwOui4iFA9sRg0LjgGzH0aAIPdWVsp1prYgc7giH0FqproVbE50LTmnlI2oIp7X87smeeKhYLuDIlUxcU/VYzVqBIYx3fqApX+SxyUkE2UGNZpcjETfxpzKnLig3vPzoMRNZa23xuKD44BBRwafHN3fqw8fWlstvMqS/HNXd/7VL4ZfJCZRm0HU9d/Q9/sz8hRJ62ltkMXNEOb6PZRvPYf+JW07TP53oXXyc3r344Bw7uEo+v7NL09sBMKXrTsKV+R2LtqJj4SnoKh4jQqq1Wc+b3a1unL/nTprZLQeGS6JcNsI4vJJCDAkhGLgvtdfuUcJzWU+6je4/fC3IFagK4zH07Y7Xp5gidLTE9LUz6xgmtuqPA8NOQCwkFfK2neAmKDJI47NcJi9WL+9VZw+t1pTN17NS7Yo5dvFPBZJkNggT4CmP6SrfhxvOJBVRfwbxfyfpUkkJlohZ4X+NehWTmTwuX9gsb1/fISF1VVIW2jAwWYUl/0/r4ssDlHCEquzU6qg9aU/wsH7HRREWJG1ezbfZyqDMwdOz9ymVMEIEtZV5ITEumgi8GfidyIbQkDGUNRJ3EzTiqJpQNhEj40NUeDq/v5E12QBTIba3cAfbVR+KpGpf7S+hmTmYgBFiAzzOvnAPeVKRJ/VOXnFXw1YX/KdrwyAklCJR0GgIUIyx74Vi/1Dpao8wgc/UA4gQGlq/l/qGHYdb+BGGgzUx703abVk5qG1MGN/DW1gcGaV6nWQxnX0w0/IaJWCV02e8yXPmJyaeDaDS4elyPGAYNIGrrPSvLvj6YhsqkUL+NAVRH5ZqKD8ixjfQMFjB7wY1dwAAAABJRU5ErkJggg==";
const Footer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: ""
  });
  const [errors, setErrors] = useState({
    nombre: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "nombre":
        if (!value.trim()) {
          error = "El nombre es requerido";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "El correo electrónico es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Formato de correo inválido";
        }
        break;
    }
    return error;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      nombre: validateField("nombre", formData.nombre),
      email: validateField("email", formData.email)
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }
    setIsSubmitting(true);
    try {
      console.log("Datos del formulario footer:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      setFormData({
        nombre: "",
        email: ""
      });
      alert("¡Mensaje enviado exitosamente!");
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      alert("Error al enviar el mensaje. Por favor, inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const isFormValid = formData.nombre.trim() && formData.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  return /* @__PURE__ */ jsxs("footer", { className: "footer", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-top", children: [
      /* @__PURE__ */ jsxs("div", { className: "container footer-inner", children: [
        /* @__PURE__ */ jsxs("div", { className: "footer-left", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "footer-logo-line", "aria-label": "Ir al inicio", children: /* @__PURE__ */ jsx("img", { src: taurelLogo, alt: "Taurel" }) }),
          /* @__PURE__ */ jsx("p", { className: "footer-tagline", children: "Impulsamos tu negocio de principio a fin." }),
          /* @__PURE__ */ jsxs("ul", { className: "contact-list", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "icon-wrap", children: /* @__PURE__ */ jsx("img", { src: phone, alt: "Teléfono" }) }),
              /* @__PURE__ */ jsx("span", { children: "+58 424-1665906" })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "icon-wrap", children: /* @__PURE__ */ jsx("img", { src: phone, alt: "Teléfono" }) }),
              /* @__PURE__ */ jsx("span", { children: "+58 424-2584353" })
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "icon-wrap icon-custom-location", children: /* @__PURE__ */ jsx("img", { src: location, alt: "Ubicación" }) }),
              /* @__PURE__ */ jsx("span", { children: "Boleíta Norte, Caracas Dtto Capital" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "footer-social", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                "aria-label": "LinkedIn",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: LinkedinIcon,
                    alt: "LinkedIn",
                    className: "social-icon"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                "aria-label": "Facebook",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: FacebookIcon,
                    alt: "Facebook",
                    className: "social-icon"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#",
                "aria-label": "Instagram",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: InstagramIcon,
                    alt: "Instagram",
                    className: "social-icon"
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "footer-right", children: [
          /* @__PURE__ */ jsxs("div", { className: "recent-posts", children: [
            /* @__PURE__ */ jsx("h3", { children: "Publicaciones Recientes" }),
            /* @__PURE__ */ jsxs("div", { className: "posts-row", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "post-card post-1",
                  href: "#",
                  "aria-label": "Publicación 1"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "post-card post-2",
                  href: "#",
                  "aria-label": "Publicación 2"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  className: "post-card post-3",
                  href: "#",
                  "aria-label": "Publicación 3"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "quick-contact", children: [
            /* @__PURE__ */ jsx("h3", { children: "Contacto rápido" }),
            /* @__PURE__ */ jsxs("form", { className: "quick-form", onSubmit: handleSubmit, children: [
              /* @__PURE__ */ jsxs("div", { className: "footer-form-group-row", children: [
                /* @__PURE__ */ jsxs("div", { className: "footer-form-group", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "nombre",
                      value: formData.nombre,
                      onChange: handleInputChange,
                      className: errors.nombre ? "input-error" : "",
                      placeholder: "Nombre y Apellido",
                      "aria-label": "Nombre y Apellido"
                    }
                  ),
                  errors.nombre && /* @__PURE__ */ jsx("span", { className: "footer-error-message", children: errors.nombre })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "footer-form-group", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleInputChange,
                      className: errors.email ? "input-error" : "",
                      placeholder: "Correo electrónico",
                      "aria-label": "Correo electrónico"
                    }
                  ),
                  errors.email && /* @__PURE__ */ jsx("span", { className: "footer-error-message", children: errors.email })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "footer-form-group", children: /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  className: `btn-send ${!isFormValid ? "btn-disabled" : ""}`,
                  disabled: !isFormValid || isSubmitting,
                  children: isSubmitting ? "Enviando..." : "Enviar"
                }
              ) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-lang", children: [
        /* @__PURE__ */ jsx("img", { className: "flag-ven", src: bandera, alt: "Venezuela" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "lang-active", children: "ESP" }),
        /* @__PURE__ */ jsx("span", { className: "sep", children: "|" }),
        /* @__PURE__ */ jsx("a", { href: "#", children: "ENG" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "footer-bottom", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("p", { className: "copyright", children: "Copyright 2025 Taurel. RIF: J-00035914-8" }) }) })
  ] });
};
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Navigation, {}), /* @__PURE__ */ jsx("main", {
      className: "page-content",
      children: /* @__PURE__ */ jsx(Outlet, {})
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const AnimatedElement = ({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
  animation = "fadeUp"
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 }
    }
  };
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      initial: "hidden",
      animate: controls,
      variants: variants[animation],
      transition: { duration, delay },
      className,
      children
    }
  );
};
function CountUp({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  className = ""
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  useEffect(() => {
    if (isInView) {
      let startTime = null;
      let animationFrame;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1e3), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.round(easeOutQuart * end);
        setCount(currentCount);
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      const timeoutId = setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, 100);
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
        clearTimeout(timeoutId);
      };
    }
  }, [isInView, end, duration]);
  return /* @__PURE__ */ jsxs(
    motion.span,
    {
      ref,
      className,
      initial: { opacity: 0, scale: 0.8 },
      animate: {
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8
      },
      transition: { duration: 0.6, ease: "easeOut" },
      children: [
        prefix,
        count.toLocaleString(),
        suffix
      ]
    }
  );
}
function ServicesSlider({ className = "" }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlide = () => {
    setActiveSlide((prev) => prev === 0 ? 1 : 0);
  };
  const prevSlide = () => {
    setActiveSlide((prev) => prev === 1 ? 0 : 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => prev === 0 ? 1 : 0);
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: `slider-container ${className}`, children: [
    /* @__PURE__ */ jsx("div", { className: `slide slide-1 ${activeSlide === 0 ? "active" : ""}`, children: /* @__PURE__ */ jsx("div", { className: "slide-content", children: /* @__PURE__ */ jsxs("div", { className: "slide-text slide-text-left", children: [
      /* @__PURE__ */ jsx("h2", { children: "Transporte Internacional de Carga" }),
      /* @__PURE__ */ jsx("p", { children: "Llegamos a más de 180 países del mundo, lo que nos permite ofrecerte: Cobertura en todos los continentes, Servicios consolidados aéreos, marítimos y multimodal, Servicio de contenedores completos (FCL) y carga fraccionada (LCL), Transporte terrestre internacional en furgones completos (FTL) y fraccionados (LTL)." })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: `slide slide-2 ${activeSlide === 1 ? "active" : ""}`, children: /* @__PURE__ */ jsx("div", { className: "slide-content", children: /* @__PURE__ */ jsxs("div", { className: "slide-text slide-text-right", children: [
      /* @__PURE__ */ jsx("h2", { children: "Servicios Navieros" }),
      /* @__PURE__ */ jsx("p", { children: "Tenemos una vasta experiencia que nos ha posicionado como agente de confianza en Venezuela para las líneas navieras más importantes del mundo. Actuando como: agente general, portuario, protector, manejo de carga pesada y voluminosa, coordinación de las operaciones de carga y descarga." })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "slider-arrows", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "slider-arrow slider-arrow-left",
          onClick: prevSlide,
          "aria-label": "Slide anterior",
          children: [
            /* @__PURE__ */ jsx("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M15 18L9 12L15 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
            /* @__PURE__ */ jsx("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M15 18L9 12L15 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "slider-arrow slider-arrow-right",
          onClick: nextSlide,
          "aria-label": "Slide siguiente",
          children: [
            /* @__PURE__ */ jsx("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M9 18L15 12L9 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
            /* @__PURE__ */ jsx("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M9 18L15 12L9 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
          ]
        }
      )
    ] })
  ] });
}
const CertificationModal = ({ isOpen, onClose }) => {
  const certificates = [
    {
      year: "2016",
      title: "TAUREL & CIA. SUCRS., C.A",
      subtitle: "Certificado por",
      code: "9001-513-1-11-2001",
      image: "/images/certificate-2016.png"
      // Placeholder
    },
    {
      year: "2023",
      title: "CUSTODIAS Y ALMACENAJE , C.A",
      subtitle: "Certificado por",
      code: "9001-149-3-12-1999",
      image: "/images/certificate-2023.png"
      // Placeholder
    },
    {
      year: "2024",
      title: "TAUREL & CIA. SUCRS., C.A",
      subtitle: "Certificado por",
      code: "9001-837-3-12-2017",
      image: "/images/certificate-2024.png"
      // Placeholder
    }
  ];
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "modal-overlay",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "modal-content",
          initial: { opacity: 0, scale: 0.8, y: 50 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.8, y: 50 },
          transition: { duration: 0.3, ease: "easeOut" },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx("button", { className: "modal-close", onClick: onClose, children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M18 6L6 18M6 6l12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ jsx("div", { className: "modal-header", children: /* @__PURE__ */ jsxs("div", { className: "modal-cert-banner", children: [
              /* @__PURE__ */ jsx("img", { src: "/app/assets/Logo-ISO.png", alt: "ISO", className: "modal-cert-logo modal-cert-logo-left" }),
              /* @__PURE__ */ jsx("h2", { className: "modal-cert-title", children: "Certificación ISO 9001:2025" }),
              /* @__PURE__ */ jsx("img", { src: "/app/assets/brillante _FONDONORMA_ 1.png", alt: "FONDONORMA", className: "modal-cert-logo modal-cert-logo-right" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "certificates-grid", children: certificates.map((cert, index) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "certificate-card",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.4, delay: 0.1 * index },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "certificate-preview", children: /* @__PURE__ */ jsxs("div", { className: "certificate-placeholder", children: [
                    /* @__PURE__ */ jsxs("div", { className: "cert-header", children: [
                      /* @__PURE__ */ jsx("div", { className: "cert-logo-small", children: "ISO" }),
                      /* @__PURE__ */ jsxs("div", { className: "cert-info", children: [
                        /* @__PURE__ */ jsx("h4", { children: cert.title }),
                        /* @__PURE__ */ jsx("p", { children: cert.subtitle }),
                        /* @__PURE__ */ jsx("span", { className: "cert-code", children: cert.code })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "cert-logo-small", children: "FONDONORMA" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "cert-body", children: [
                      /* @__PURE__ */ jsxs("div", { className: "cert-lines", children: [
                        /* @__PURE__ */ jsx("div", { className: "cert-line" }),
                        /* @__PURE__ */ jsx("div", { className: "cert-line" }),
                        /* @__PURE__ */ jsx("div", { className: "cert-line" }),
                        /* @__PURE__ */ jsx("div", { className: "cert-line short" })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "cert-seal", children: /* @__PURE__ */ jsx("div", { className: "seal-circle" }) })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "cert-footer", children: /* @__PURE__ */ jsxs("div", { className: "cert-signature-area", children: [
                      /* @__PURE__ */ jsx("div", { className: "signature-line" }),
                      /* @__PURE__ */ jsx("div", { className: "signature-line" })
                    ] }) })
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { className: "certificate-details", children: [
                    /* @__PURE__ */ jsx("h3", { children: cert.title }),
                    /* @__PURE__ */ jsx("p", { className: "cert-subtitle", children: cert.subtitle }),
                    /* @__PURE__ */ jsx("p", { className: "cert-code-display", children: cert.code })
                  ] })
                ]
              },
              cert.year
            )) })
          ]
        }
      )
    }
  ) });
};
const arrowpUT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAATCAYAAAAeVmTJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACjSURBVHgBxdZtDYAgEAbgo4ERiGAEoxjFSEawiRG0wXkobM6Nb158txsM2HiAPxBVhJkHqVlK0x+RjUepg5+YdqSe+QC4O8QD6AeJAPCQAGDrAgkAFju/QCExwGsdBpIKgEFyAc0hpYBmkFpANaQVoBjSGpANQQGSIdLRSEACZHC3AAVEIJP7mOxogAeymzFlJ7Q05n1OpdRG4NynJ9JSq+x3XhqbH0j8ohKcAAAAAElFTkSuQmCC";
const logo9 = "/assets/Logo%20camara%20de%20comercio%209-DkRSPhHe.png";
const logo10 = "/assets/Logo%20camara%20de%20comercio%2010-e2V2pFPx.png";
const logo11 = "/assets/Logo%20camara%20de%20comercio%2011-DbCbXw3y.png";
const logo12 = "/assets/Logo%20camara%20de%20comercio%2012-CcigKxMD.png";
const logo15 = "/assets/Logo%20camara%20de%20comercio%2015-Ct36QIdD.png";
const logo16 = "/assets/Logo%20camara%20de%20comercio%2016-N9V4h3u2.png";
const logo19 = "/assets/Logo%20camara%20de%20comercio%2019-B7PsQQTL.png";
const PartnersSlider = () => {
  const partners = [
    { id: 1, src: logo9, alt: "Cámara de Comercio 9" },
    { id: 2, src: logo10, alt: "Cámara de Comercio 10" },
    { id: 3, src: logo11, alt: "Cámara de Comercio 11" },
    { id: 4, src: logo12, alt: "Cámara de Comercio 12" },
    { id: 5, src: logo15, alt: "Cámara de Comercio 15" },
    { id: 6, src: logo16, alt: "Cámara de Comercio 16" },
    { id: 7, src: logo19, alt: "Cámara de Comercio 19" }
  ];
  const duplicatedPartners = [...partners, ...partners, ...partners];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsx("div", { className: "partners-container", children: /* @__PURE__ */ jsx("div", { className: "partners-content", children: /* @__PURE__ */ jsxs("div", { className: "partners-with-button", children: [
    /* @__PURE__ */ jsx("div", { className: "partners-slider-wrapper", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "partners-slider-track",
        animate: {
          x: [0, -100 * partners.length]
        },
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        },
        children: duplicatedPartners.map((partner, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "partner-logo-item",
            whileHover: { scale: 1.05, y: -5 },
            transition: { duration: 0.3 },
            children: /* @__PURE__ */ jsx("img", { src: partner.src, alt: partner.alt })
          },
          `${partner.id}-${Math.floor(index / partners.length)}`
        ))
      }
    ) }),
    /* @__PURE__ */ jsx(
      motion.button,
      {
        className: "back-to-top",
        onClick: scrollToTop,
        whileHover: { scale: 1.1, y: -3 },
        whileTap: { scale: 0.95 },
        initial: { opacity: 0, scale: 0 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.7 },
        children: /* @__PURE__ */ jsx("img", { src: arrowpUT, alt: "" })
      }
    )
  ] }) }) });
};
const mapVenezuela = "/assets/mappoints-BEjm1wc0.png";
const mapapoints = "/assets/maos2-D9XvrWeo.png";
const LocationsBanner = () => {
  const locations = [
    "Caracas, Dtto. Capital.",
    "La Guaira, Edo. Vargas.",
    "Catia La Mar, Vargas.",
    "Valencia, Edo. Carabobo.",
    "El Guamache, Nueva Esparta.",
    "Maracaibo, Edo. Zulia.",
    "Barquisimeto, Edo. Lara.",
    "Pto. Cabello, Edo. Carabobo.",
    "San Antonio del Táchira, Edo. Táchira.",
    "Santa Elena de Uairén, Bolívar."
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };
  const mapVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "locations-banner", children: [
    /* @__PURE__ */ jsxs("div", { className: "locations-banner-container", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "locations-content",
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.3 },
          children: [
            /* @__PURE__ */ jsxs(motion.div, { className: "locations-header", variants: logoVariants, children: [
              /* @__PURE__ */ jsx("img", { className: "maos2", src: mapapoints, alt: "" }),
              /* @__PURE__ */ jsx("img", { src: taurelLogo, alt: "Taurel", className: "taurel-logo" }),
              /* @__PURE__ */ jsx(
                motion.h2,
                {
                  className: "locations-tagline",
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.8, delay: 0.6 },
                  children: "Impulsamos tu negocio de principio a fin."
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(motion.div, { className: "locations-list", variants: containerVariants, children: [
              /* @__PURE__ */ jsx("div", { className: "locations-column left", children: locations.slice(0, 5).map((location2, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "location-item",
                  variants: itemVariants,
                  whileHover: {
                    scale: 1.05,
                    x: 5,
                    transition: { duration: 0.2 }
                  },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "location-dot" }),
                    /* @__PURE__ */ jsx("span", { children: location2 })
                  ]
                },
                index
              )) }),
              /* @__PURE__ */ jsx("div", { className: "locations-column right", children: locations.slice(5).map((location2, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "location-item",
                  variants: itemVariants,
                  whileHover: {
                    scale: 1.05,
                    x: 5,
                    transition: { duration: 0.2 }
                  },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "location-dot" }),
                    /* @__PURE__ */ jsx("span", { children: location2 })
                  ]
                },
                index + 5
              )) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "locations-map",
          variants: mapVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, amount: 0.3 }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "mapa-venezuela-points",
        style: {
          position: "absolute",
          top: "0",
          right: 0,
          zIndex: 100
        },
        src: mapVenezuela,
        alt: ""
      }
    )
  ] });
};
const isoLogo = "/assets/Logo-ISO-EkZZ_lYk.png";
const fondonormaLogo = "/assets/brillante%20_FONDONORMA_%201-DCfhDhoG.png";
const img1911 = "/assets/1911-3HNN6odw.png";
const img1945 = "/assets/1945-DXDkjAk1.png";
const img1999 = "/assets/1999-B2-9FJe-.png";
const img2002 = "/assets/2002-CyW-5o2c.png";
const img2024 = "/assets/2024-Cb4VZexT.png";
const img1994 = "/assets/1994-DgXul3uH.png";
const videoBanner = "/assets/video-banner-CqHJLfLd.mp4";
function meta$3({}) {
  return [{
    title: "Taurel - Soluciones Logísticas"
  }, {
    name: "description",
    content: "Taurel - Empresa líder en soluciones logísticas y transporte internacional"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return /* @__PURE__ */ jsxs("div", {
    className: "home-page",
    children: [/* @__PURE__ */ jsxs("section", {
      className: "main-hero",
      children: [/* @__PURE__ */ jsxs("video", {
        className: "main-hero-video",
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        preload: "auto",
        controls: false,
        disablePictureInPicture: true,
        onLoadStart: () => console.log("Video loading started"),
        onCanPlay: () => console.log("Video can play"),
        onError: (e) => console.error("Video error:", e),
        children: [/* @__PURE__ */ jsx("source", {
          src: videoBanner,
          type: "video/mp4"
        }), "Tu navegador no soporta el elemento de video."]
      }), /* @__PURE__ */ jsx("div", {
        className: "main-hero-overlay"
      }), /* @__PURE__ */ jsx("div", {
        className: "main-hero-content",
        children: /* @__PURE__ */ jsx("div", {
          className: "main-hero-text",
          children: /* @__PURE__ */ jsxs(motion.div, {
            initial: {
              opacity: 0,
              y: 50
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 1
            },
            children: [/* @__PURE__ */ jsx("h1", {
              children: "Somos su aliado logístico de principio a fin, comprometidos en cada paso: desde la planificación inicial hasta el destino final."
            }), /* @__PURE__ */ jsx(motion.button, {
              className: "cta-button",
              initial: {
                opacity: 0,
                y: 20
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 1,
                delay: 0.3
              },
              whileHover: {
                scale: 1.05
              },
              whileTap: {
                scale: 0.95
              },
              children: "Conoce nuestras soluciones"
            })]
          })
        })
      })]
    }), /* @__PURE__ */ jsxs("section", {
      className: "stats-hero",
      children: [/* @__PURE__ */ jsx("div", {
        className: "stats-hero-overlay"
      }), /* @__PURE__ */ jsxs("div", {
        className: "container stats-hero-container",
        children: [/* @__PURE__ */ jsx("img", {
          className: "maos2",
          src: mapapoints,
          alt: ""
        }), /* @__PURE__ */ jsxs(motion.div, {
          className: "stats-hero-content",
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 1
          },
          children: [/* @__PURE__ */ jsx("p", {
            className: "stats-title",
            children: "Más que logística: es un legado de 100 años"
          }), /* @__PURE__ */ jsx("p", {
            className: "stats-subtitle",
            children: "Algunos datos curiosos sobre nuestra compañía"
          }), /* @__PURE__ */ jsxs("div", {
            className: "stats-grid",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "stat-card",
              children: [/* @__PURE__ */ jsx("h3", {
                children: /* @__PURE__ */ jsx(CountUp, {
                  end: 9,
                  duration: 2.5,
                  prefix: "+"
                })
              }), /* @__PURE__ */ jsx("p", {
                children: "Oficinas a nivel Nacional"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "stat-card",
              children: [/* @__PURE__ */ jsx("h3", {
                children: /* @__PURE__ */ jsx(CountUp, {
                  end: 180,
                  duration: 2.8,
                  prefix: "+"
                })
              }), /* @__PURE__ */ jsx("p", {
                children: "Aliados a nivel global para conectar sus operaciones"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "stat-card",
              children: [/* @__PURE__ */ jsx("h3", {
                children: /* @__PURE__ */ jsx(CountUp, {
                  end: 200,
                  duration: 3,
                  prefix: "+"
                })
              }), /* @__PURE__ */ jsx("p", {
                children: "Colaboradores para satisfacer sus necesidades"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "stat-card",
              children: [/* @__PURE__ */ jsx("h3", {
                children: /* @__PURE__ */ jsx(CountUp, {
                  end: 2e3,
                  duration: 3.2,
                  prefix: "+"
                })
              }), /* @__PURE__ */ jsx("p", {
                children: "Clientes que confían en nuestras soluciones innovadoras"
              })]
            })]
          })]
        })]
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "services-slider section",
      children: /* @__PURE__ */ jsx(ServicesSlider, {})
    }), /* @__PURE__ */ jsx("section", {
      className: "timeline-section section",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container",
        children: [/* @__PURE__ */ jsx(AnimatedElement, {
          animation: "fadeUp",
          children: /* @__PURE__ */ jsx("div", {
            className: "section-title",
            children: /* @__PURE__ */ jsx("h2", {
              children: "Nuestra Historia, Tu Confianza..."
            })
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "hex-timeline",
          children: [/* @__PURE__ */ jsx(motion.div, {
            className: "timeline-line",
            "aria-hidden": "true",
            initial: {
              scaleX: 0
            },
            whileInView: {
              scaleX: 1
            },
            transition: {
              duration: 1.5,
              ease: "easeInOut"
            },
            viewport: {
              once: true
            }
          }), /* @__PURE__ */ jsxs("div", {
            className: "hex-row top",
            children: [/* @__PURE__ */ jsxs(motion.div, {
              className: "hex-item top",
              initial: {
                opacity: 0,
                y: -100,
                scale: 0.8
              },
              whileInView: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.8,
                delay: 0.1,
                type: "spring",
                stiffness: 100
              },
              viewport: {
                once: true,
                amount: 0.3
              },
              children: [/* @__PURE__ */ jsx(motion.div, {
                className: "hex",
                style: {
                  backgroundImage: `url(${img1911})`
                },
                whileHover: {
                  scale: 1.1
                },
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                },
                children: /* @__PURE__ */ jsxs(motion.div, {
                  className: "hex-content-wrapper",
                  initial: {
                    opacity: 1
                  },
                  whileHover: {
                    opacity: 0
                  },
                  transition: {
                    duration: 0.3
                  },
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "hex-overlay"
                  }), /* @__PURE__ */ jsx(motion.span, {
                    className: "hex-year",
                    initial: {
                      opacity: 0,
                      scale: 0
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: {
                      duration: 0.5,
                      delay: 0.6
                    },
                    viewport: {
                      once: true
                    },
                    children: "1911"
                  })]
                })
              }), /* @__PURE__ */ jsx(motion.p, {
                className: "hex-caption",
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.6,
                  delay: 0.8
                },
                viewport: {
                  once: true
                },
                children: "Comenzamos con una pequeña oficina aduanal manejando trámites portuarios básicos de recepción de mercancías en puerto."
              })]
            }), /* @__PURE__ */ jsxs(motion.div, {
              className: "hex-item top",
              initial: {
                opacity: 0,
                y: -100,
                scale: 0.8
              },
              whileInView: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 100
              },
              viewport: {
                once: true,
                amount: 0.3
              },
              children: [/* @__PURE__ */ jsx(motion.div, {
                className: "hex",
                style: {
                  backgroundImage: `url(${img1945})`
                },
                whileHover: {
                  scale: 1.1
                },
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                },
                children: /* @__PURE__ */ jsxs(motion.div, {
                  className: "hex-content-wrapper",
                  initial: {
                    opacity: 1
                  },
                  whileHover: {
                    opacity: 0
                  },
                  transition: {
                    duration: 0.3
                  },
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "hex-overlay"
                  }), /* @__PURE__ */ jsx(motion.span, {
                    className: "hex-year",
                    initial: {
                      opacity: 0,
                      scale: 0
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: {
                      duration: 0.5,
                      delay: 0.8
                    },
                    viewport: {
                      once: true
                    },
                    children: "1945"
                  })]
                })
              }), /* @__PURE__ */ jsx(motion.p, {
                className: "hex-caption",
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.6,
                  delay: 1
                },
                viewport: {
                  once: true
                },
                children: "Decidimos expandir nuestras actividades al manejo del transporte de carga vía marítima, construyendo un edificio emblemático en La Guaira – Venezuela."
              })]
            }), /* @__PURE__ */ jsxs(motion.div, {
              className: "hex-item top",
              initial: {
                opacity: 0,
                y: -100,
                scale: 0.8
              },
              whileInView: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100
              },
              viewport: {
                once: true,
                amount: 0.3
              },
              children: [/* @__PURE__ */ jsx(motion.div, {
                className: "hex",
                style: {
                  backgroundImage: `url(${img1994})`
                },
                whileHover: {
                  scale: 1.1
                  /*  rotateY: 10,
                  rotateX: -5, */
                },
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                },
                children: /* @__PURE__ */ jsxs(motion.div, {
                  className: "hex-content-wrapper",
                  initial: {
                    opacity: 1
                  },
                  whileHover: {
                    opacity: 0
                  },
                  transition: {
                    duration: 0.3
                  },
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "hex-overlay"
                  }), /* @__PURE__ */ jsx(motion.span, {
                    className: "hex-year",
                    initial: {
                      opacity: 0,
                      scale: 0
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: {
                      duration: 0.5,
                      delay: 1
                    },
                    viewport: {
                      once: true
                    },
                    children: "1994"
                  })]
                })
              }), /* @__PURE__ */ jsx(motion.p, {
                className: "hex-caption",
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.6,
                  delay: 1.2
                },
                viewport: {
                  once: true
                },
                children: "Seleccionados como Agente de Aduanas y Asesor en Materia de Aduanas del METRO DE CARACAS C.A. durante 4 años (Línea 3)."
              })]
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "hex-row bottom",
            children: [/* @__PURE__ */ jsxs(motion.div, {
              className: "hex-item bottom",
              initial: {
                opacity: 0,
                y: 100,
                scale: 0.8
              },
              whileInView: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              },
              viewport: {
                once: true,
                amount: 0.3
              },
              children: [/* @__PURE__ */ jsx(motion.div, {
                className: "hex",
                style: {
                  backgroundImage: `url(${img1999})`
                },
                whileHover: {
                  scale: 1.1
                  /*  rotateY: -10,
                  rotateX: -5, */
                },
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                },
                children: /* @__PURE__ */ jsxs(motion.div, {
                  className: "hex-content-wrapper",
                  initial: {
                    opacity: 1
                  },
                  whileHover: {
                    opacity: 0
                  },
                  transition: {
                    duration: 0.3
                  },
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "hex-overlay"
                  }), /* @__PURE__ */ jsx(motion.span, {
                    className: "hex-year",
                    initial: {
                      opacity: 0,
                      scale: 0
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: {
                      duration: 0.5,
                      delay: 0.7
                    },
                    viewport: {
                      once: true
                    },
                    children: "1999"
                  })]
                })
              }), /* @__PURE__ */ jsx(motion.p, {
                className: "hex-caption",
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.6,
                  delay: 0.9
                },
                viewport: {
                  once: true
                },
                children: "Primer Certificado del Servicio de Gestión de la Calidad. Bajo la norma COVENIN-ISO 9002:1995."
              })]
            }), /* @__PURE__ */ jsxs(motion.div, {
              className: "hex-item bottom",
              initial: {
                opacity: 0,
                y: 100,
                scale: 0.8
              },
              whileInView: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100
              },
              viewport: {
                once: true,
                amount: 0.3
              },
              children: [/* @__PURE__ */ jsx(motion.div, {
                className: "hex",
                style: {
                  backgroundImage: `url(${img2002})`
                },
                whileHover: {
                  scale: 1.1
                  /*  rotateY: 10,
                  rotateX: -5, */
                },
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                },
                children: /* @__PURE__ */ jsxs(motion.div, {
                  className: "hex-content-wrapper",
                  initial: {
                    opacity: 1
                  },
                  whileHover: {
                    opacity: 0
                  },
                  transition: {
                    duration: 0.3
                  },
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "hex-overlay"
                  }), /* @__PURE__ */ jsx(motion.span, {
                    className: "hex-year",
                    initial: {
                      opacity: 0,
                      scale: 0
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: {
                      duration: 0.5,
                      delay: 0.9
                    },
                    viewport: {
                      once: true
                    },
                    children: "2002"
                  })]
                })
              }), /* @__PURE__ */ jsx(motion.p, {
                className: "hex-caption",
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.6,
                  delay: 1.1
                },
                viewport: {
                  once: true
                },
                children: "Representación de la naviera ZIM en Venezuela. Desde 2002, representación exclusiva con la creación de ZIM Venezuela."
              })]
            }), /* @__PURE__ */ jsxs(motion.div, {
              className: "hex-item bottom",
              initial: {
                opacity: 0,
                y: 100,
                scale: 0.8
              },
              whileInView: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100
              },
              viewport: {
                once: true,
                amount: 0.3
              },
              children: [/* @__PURE__ */ jsx(motion.div, {
                className: "hex",
                style: {
                  backgroundImage: `url(${img2024})`
                },
                whileHover: {
                  scale: 1.1,
                  rotateY: -10,
                  rotateX: 5
                },
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                },
                children: /* @__PURE__ */ jsxs(motion.div, {
                  className: "hex-content-wrapper",
                  initial: {
                    opacity: 1
                  },
                  whileHover: {
                    opacity: 0
                  },
                  transition: {
                    duration: 0.3
                  },
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "hex-overlay"
                  }), /* @__PURE__ */ jsx(motion.span, {
                    className: "hex-year",
                    initial: {
                      opacity: 0,
                      scale: 0
                    },
                    whileInView: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: {
                      duration: 0.5,
                      delay: 1.1
                    },
                    viewport: {
                      once: true
                    },
                    children: "2024"
                  })]
                })
              }), /* @__PURE__ */ jsx(motion.p, {
                className: "hex-caption",
                initial: {
                  opacity: 0,
                  y: 20
                },
                whileInView: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.6,
                  delay: 1.3
                },
                viewport: {
                  once: true
                },
                children: "Innovamos a nivel tecnológico con la creación de DragOn, nuestra APP."
              })]
            })]
          }), /* @__PURE__ */ jsx(motion.div, {
            className: "hex-decoration hex-left",
            "aria-hidden": "true",
            whileInView: {
              opacity: 1,
              x: 0
            },
            viewport: {
              once: true
            },
            animate: {
              scale: [1, 1.015, 1],
              y: [0, -4, 0]
            },
            whileHover: {
              opacity: 0.8,
              scale: 1.05,
              filter: "brightness(1.1) drop-shadow(0 0 12px rgba(26, 144, 206, 0.4))"
            }
          }), /* @__PURE__ */ jsx(motion.div, {
            className: "hex-decoration hex-right",
            "aria-hidden": "true",
            whileInView: {
              opacity: 1,
              x: 0
            },
            viewport: {
              once: true
            },
            animate: {
              rotate: [0, 1.5, 0, -1.5, 0],
              scale: [1, 1.015, 1],
              y: [0, 3, 0, -3, 0]
            },
            whileHover: {
              opacity: 0.8,
              scale: 1.05,
              rotate: 5,
              filter: "brightness(1.1) drop-shadow(0 0 12px rgba(26, 144, 206, 0.4))"
            }
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "certifications section",
      children: /* @__PURE__ */ jsxs("div", {
        className: "cert-banner",
        children: [/* @__PURE__ */ jsx("img", {
          src: isoLogo,
          alt: "ISO",
          className: "cert-logo cert-logo-left"
        }), /* @__PURE__ */ jsx(motion.h3, {
          initial: {
            opacity: 0,
            y: 20
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: true
          },
          transition: {
            duration: 0.6
          },
          whileHover: {
            scale: 1,
            cursor: "pointer"
          },
          whileTap: {
            scale: 0.98
          },
          onClick: openModal,
          className: "cert-title",
          children: "Certificación ISO 9001:2025"
        }), /* @__PURE__ */ jsx("img", {
          src: fondonormaLogo,
          alt: "FONDONORMA",
          className: "cert-logo cert-logo-right"
        })]
      })
    }), /* @__PURE__ */ jsx(LocationsBanner, {}), /* @__PURE__ */ jsx(PartnersSlider, {}), /* @__PURE__ */ jsx(CertificationModal, {
      isOpen: isModalOpen,
      onClose: closeModal
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function meta$2() {
  return [{
    title: "Servicios - Taurel"
  }, {
    name: "description",
    content: "Conoce nuestros servicios logísticos y de transporte internacional"
  }];
}
const servicios = UNSAFE_withComponentProps(function Servicios() {
  return /* @__PURE__ */ jsxs("div", {
    className: "servicios-page",
    children: [/* @__PURE__ */ jsxs("section", {
      className: "page-hero",
      children: [/* @__PURE__ */ jsx("div", {
        className: "page-hero-overlay"
      }), /* @__PURE__ */ jsx("div", {
        className: "container",
        children: /* @__PURE__ */ jsxs(motion.div, {
          className: "page-hero-content",
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 1
          },
          children: [/* @__PURE__ */ jsx("h1", {
            children: "Servicios"
          }), /* @__PURE__ */ jsx("p", {
            children: "Nuestras Soluciones Logísticas"
          })]
        })
      })]
    }), /* @__PURE__ */ jsx("section", {
      className: "main-services section",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container",
        children: [/* @__PURE__ */ jsxs(AnimatedElement, {
          animation: "fadeUp",
          children: [/* @__PURE__ */ jsx("div", {
            className: "section-title",
            children: /* @__PURE__ */ jsx("h2", {
              children: "Transporte Internacional de Carga"
            })
          }), /* @__PURE__ */ jsx("p", {
            className: "section-description",
            children: "En Taurel Internacional de Carga ofrecemos soluciones logísticas completas para optimizar su cadena de suministro."
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "service-boxes",
          children: [/* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.1,
            className: "service-box",
            children: [/* @__PURE__ */ jsx("div", {
              className: "service-icon",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                icon: faShip
              })
            }), /* @__PURE__ */ jsx("h3", {
              children: "Transporte Marítimo"
            }), /* @__PURE__ */ jsx("p", {
              children: "Servicio de transporte marítimo con conexiones a los principales puertos del mundo. Ofrecemos soluciones para carga completa y consolidada."
            }), /* @__PURE__ */ jsxs("ul", {
              className: "service-features",
              children: [/* @__PURE__ */ jsx("li", {
                children: "Servicio de puerta a puerta"
              }), /* @__PURE__ */ jsx("li", {
                children: "Rastreo en línea"
              }), /* @__PURE__ */ jsx("li", {
                children: "Consolidación de carga"
              })]
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.2,
            className: "service-box",
            children: [/* @__PURE__ */ jsx("div", {
              className: "service-icon",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                icon: faTruckMoving
              })
            }), /* @__PURE__ */ jsx("h3", {
              children: "Transporte Terrestre"
            }), /* @__PURE__ */ jsx("p", {
              children: "Red de transporte terrestre que conecta los principales centros logísticos con entregas puntuales y servicio personalizado."
            }), /* @__PURE__ */ jsxs("ul", {
              className: "service-features",
              children: [/* @__PURE__ */ jsx("li", {
                children: "Flota moderna y segura"
              }), /* @__PURE__ */ jsx("li", {
                children: "Seguimiento GPS en tiempo real"
              }), /* @__PURE__ */ jsx("li", {
                children: "Transporte nacional e internacional"
              })]
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.3,
            className: "service-box",
            children: [/* @__PURE__ */ jsx("div", {
              className: "service-icon",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                icon: faFileAlt
              })
            }), /* @__PURE__ */ jsx("h3", {
              children: "Gestión Aduanera"
            }), /* @__PURE__ */ jsx("p", {
              children: "Servicios integrales de gestión aduanera para facilitar sus importaciones y exportaciones cumpliendo con todas las regulaciones."
            }), /* @__PURE__ */ jsxs("ul", {
              className: "service-features",
              children: [/* @__PURE__ */ jsx("li", {
                children: "Asesoría en comercio exterior"
              }), /* @__PURE__ */ jsx("li", {
                children: "Clasificación arancelaria"
              }), /* @__PURE__ */ jsx("li", {
                children: "Documentación y permisos"
              })]
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "maritime-services section",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container",
        children: [/* @__PURE__ */ jsx(AnimatedElement, {
          animation: "fadeUp",
          children: /* @__PURE__ */ jsx("div", {
            className: "section-title",
            children: /* @__PURE__ */ jsx("h2", {
              children: "Servicios Marítimos"
            })
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "services-content",
          children: [/* @__PURE__ */ jsx(AnimatedElement, {
            animation: "fadeLeft",
            className: "services-image",
            children: /* @__PURE__ */ jsx("div", {
              className: "hexagon-image",
              children: /* @__PURE__ */ jsx("img", {
                src: "https://via.placeholder.com/600x400",
                alt: "Servicios Marítimos"
              })
            })
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeRight",
            className: "services-text",
            children: [/* @__PURE__ */ jsx("h3", {
              children: "Conectamos todos los continentes con nuestros servicios marítimos"
            }), /* @__PURE__ */ jsx("p", {
              children: "Ofrecemos soluciones de transporte marítimo global para todo tipo de carga. Nuestro equipo experto gestiona cada embarque con atención al detalle y compromiso con la excelencia."
            }), /* @__PURE__ */ jsxs("div", {
              className: "service-details",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "service-detail",
                children: [/* @__PURE__ */ jsx(FontAwesomeIcon, {
                  icon: faGlobeAmericas,
                  className: "detail-icon"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "detail-text",
                  children: [/* @__PURE__ */ jsx("h4", {
                    children: "Cobertura Global"
                  }), /* @__PURE__ */ jsx("p", {
                    children: "Conexiones con los principales puertos del mundo"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "service-detail",
                children: [/* @__PURE__ */ jsx(FontAwesomeIcon, {
                  icon: faCube,
                  className: "detail-icon"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "detail-text",
                  children: [/* @__PURE__ */ jsx("h4", {
                    children: "Carga Consolidada"
                  }), /* @__PURE__ */ jsx("p", {
                    children: "Soluciones eficientes para envíos más pequeños"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "service-detail",
                children: [/* @__PURE__ */ jsx(FontAwesomeIcon, {
                  icon: faWarehouse,
                  className: "detail-icon"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "detail-text",
                  children: [/* @__PURE__ */ jsx("h4", {
                    children: "Almacenaje Temporal"
                  }), /* @__PURE__ */ jsx("p", {
                    children: "Instalaciones seguras para su mercancía"
                  })]
                })]
              })]
            }), /* @__PURE__ */ jsx("a", {
              href: "/contactanos",
              className: "btn btn-primary",
              children: "Solicitar Cotización"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "logistics-chain section",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container",
        children: [/* @__PURE__ */ jsx(AnimatedElement, {
          animation: "fadeUp",
          children: /* @__PURE__ */ jsx("div", {
            className: "section-title",
            children: /* @__PURE__ */ jsx("h2", {
              children: "Cadena Logística Completa"
            })
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "logistics-flow",
          children: [/* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.1,
            className: "logistics-step",
            children: [/* @__PURE__ */ jsx("div", {
              className: "step-number",
              children: "1"
            }), /* @__PURE__ */ jsxs("div", {
              className: "step-content",
              children: [/* @__PURE__ */ jsx("h4", {
                children: "Planificación"
              }), /* @__PURE__ */ jsx("p", {
                children: "Análisis de sus necesidades y diseño de soluciones personalizadas"
              })]
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.2,
            className: "logistics-step",
            children: [/* @__PURE__ */ jsx("div", {
              className: "step-number",
              children: "2"
            }), /* @__PURE__ */ jsxs("div", {
              className: "step-content",
              children: [/* @__PURE__ */ jsx("h4", {
                children: "Recogida"
              }), /* @__PURE__ */ jsx("p", {
                children: "Recolección de mercancía en el punto de origen"
              })]
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.3,
            className: "logistics-step",
            children: [/* @__PURE__ */ jsx("div", {
              className: "step-number",
              children: "3"
            }), /* @__PURE__ */ jsxs("div", {
              className: "step-content",
              children: [/* @__PURE__ */ jsx("h4", {
                children: "Transporte"
              }), /* @__PURE__ */ jsx("p", {
                children: "Traslado seguro y eficiente por vía marítima, terrestre o aérea"
              })]
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.4,
            className: "logistics-step",
            children: [/* @__PURE__ */ jsx("div", {
              className: "step-number",
              children: "4"
            }), /* @__PURE__ */ jsxs("div", {
              className: "step-content",
              children: [/* @__PURE__ */ jsx("h4", {
                children: "Aduanas"
              }), /* @__PURE__ */ jsx("p", {
                children: "Gestión de trámites y documentación aduanera"
              })]
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.5,
            className: "logistics-step",
            children: [/* @__PURE__ */ jsx("div", {
              className: "step-number",
              children: "5"
            }), /* @__PURE__ */ jsxs("div", {
              className: "step-content",
              children: [/* @__PURE__ */ jsx("h4", {
                children: "Entrega"
              }), /* @__PURE__ */ jsx("p", {
                children: "Distribución final hasta el punto de destino"
              })]
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "cta-section",
      children: /* @__PURE__ */ jsx("div", {
        className: "container",
        children: /* @__PURE__ */ jsxs(AnimatedElement, {
          animation: "fadeUp",
          className: "cta-content",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Soluciones logísticas a medida"
          }), /* @__PURE__ */ jsx("p", {
            children: "Contáctanos para discutir cómo podemos ayudar a optimizar tu cadena de suministro."
          }), /* @__PURE__ */ jsx("a", {
            href: "/contactanos",
            className: "btn btn-primary",
            children: "Solicitar Información"
          })]
        })
      })
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: servicios,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function meta$1() {
  return [{
    title: "Sobre Nosotros - Taurel"
  }, {
    name: "description",
    content: "Conoce más sobre Taurel, nuestra historia, valores y equipo"
  }];
}
const sobreNosotros = UNSAFE_withComponentProps(function SobreNosotros() {
  return /* @__PURE__ */ jsxs("div", {
    className: "sobre-nosotros-page",
    children: [/* @__PURE__ */ jsx("section", {
      className: "banner-slider",
      children: /* @__PURE__ */ jsxs(Swiper, {
        spaceBetween: 0,
        centeredSlides: true,
        effect: "fade",
        autoplay: {
          delay: 5e3,
          disableOnInteraction: false
        },
        pagination: {
          clickable: true
        },
        navigation: true,
        modules: [Autoplay, Pagination, Navigation$1, EffectFade],
        className: "banner-swiper",
        children: [/* @__PURE__ */ jsx(SwiperSlide, {
          children: /* @__PURE__ */ jsxs("div", {
            className: "banner-slide",
            style: {
              backgroundImage: "url('https://via.placeholder.com/1920x600')"
            },
            children: [/* @__PURE__ */ jsx("div", {
              className: "banner-overlay"
            }), /* @__PURE__ */ jsxs("div", {
              className: "banner-content",
              children: [/* @__PURE__ */ jsx("h1", {
                children: "Misión"
              }), /* @__PURE__ */ jsx("p", {
                children: "Brindar soluciones logísticas integrales que superen las expectativas de nuestros clientes, optimizando sus cadenas de suministro con eficiencia, puntualidad y compromiso."
              })]
            })]
          })
        }), /* @__PURE__ */ jsx(SwiperSlide, {
          children: /* @__PURE__ */ jsxs("div", {
            className: "banner-slide",
            style: {
              backgroundImage: "url('https://via.placeholder.com/1920x600')"
            },
            children: [/* @__PURE__ */ jsx("div", {
              className: "banner-overlay"
            }), /* @__PURE__ */ jsxs("div", {
              className: "banner-content",
              children: [/* @__PURE__ */ jsx("h1", {
                children: "Visión"
              }), /* @__PURE__ */ jsx("p", {
                children: "Ser reconocidos como líderes en logística internacional, expandiendo nuestra presencia global mientras mantenemos un servicio personalizado y de alta calidad."
              })]
            })]
          })
        }), /* @__PURE__ */ jsx(SwiperSlide, {
          children: /* @__PURE__ */ jsxs("div", {
            className: "banner-slide",
            style: {
              backgroundImage: "url('https://via.placeholder.com/1920x600')"
            },
            children: [/* @__PURE__ */ jsx("div", {
              className: "banner-overlay"
            }), /* @__PURE__ */ jsxs("div", {
              className: "banner-content",
              children: [/* @__PURE__ */ jsx("h1", {
                children: "Valores"
              }), /* @__PURE__ */ jsx("p", {
                children: "Nos guiamos por la integridad, innovación, excelencia y compromiso con nuestros clientes, colaboradores y el medio ambiente."
              })]
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "history-section section",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container",
        children: [/* @__PURE__ */ jsx(AnimatedElement, {
          animation: "fadeUp",
          children: /* @__PURE__ */ jsx("div", {
            className: "section-title",
            children: /* @__PURE__ */ jsx("h2", {
              children: "Nuestra Historia"
            })
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "history-content",
          children: [/* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeRight",
            className: "history-text",
            children: [/* @__PURE__ */ jsx("p", {
              children: "Fundada hace más de 20 años, Taurel nació con la visión de transformar la logística internacional mediante un servicio personalizado y eficiente. A lo largo de las décadas, hemos crecido constantemente, ampliando nuestra red global y desarrollando soluciones innovadoras para afrontar los retos de un mercado cada vez más complejo y dinámico."
            }), /* @__PURE__ */ jsx("p", {
              children: "Nuestra trayectoria está marcada por hitos importantes como la expansión a nuevos mercados, la implementación de tecnologías avanzadas para el seguimiento de mercancías y la obtención de certificaciones internacionales que avalan nuestra calidad y compromiso."
            }), /* @__PURE__ */ jsx("p", {
              children: "Hoy, Taurel se ha convertido en un referente en el sector logístico, ofreciendo soluciones integrales que abarcan desde el transporte marítimo y terrestre hasta la gestión aduanera y el almacenaje. Nuestro compromiso con la excelencia sigue siendo el pilar fundamental de nuestro crecimiento continuo."
            })]
          }), /* @__PURE__ */ jsx(AnimatedElement, {
            animation: "fadeLeft",
            className: "history-image",
            children: /* @__PURE__ */ jsx("img", {
              src: "https://via.placeholder.com/600x400",
              alt: "Historia de Taurel"
            })
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "why-choose-us section",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container",
        children: [/* @__PURE__ */ jsx(AnimatedElement, {
          animation: "fadeUp",
          children: /* @__PURE__ */ jsx("div", {
            className: "section-title",
            children: /* @__PURE__ */ jsx("h2", {
              children: "¿Por qué elegirnos?"
            })
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "features-grid",
          children: [/* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.1,
            className: "feature-item",
            children: [/* @__PURE__ */ jsx("div", {
              className: "feature-icon",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                icon: faTrophy
              })
            }), /* @__PURE__ */ jsx("h3", {
              children: "Experiencia"
            }), /* @__PURE__ */ jsx("p", {
              children: "Más de 20 años brindando soluciones logísticas de excelencia"
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.2,
            className: "feature-item",
            children: [/* @__PURE__ */ jsx("div", {
              className: "feature-icon",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                icon: faGlobeAmericas
              })
            }), /* @__PURE__ */ jsx("h3", {
              children: "Cobertura Global"
            }), /* @__PURE__ */ jsx("p", {
              children: "Presencia en los principales mercados internacionales"
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.3,
            className: "feature-item",
            children: [/* @__PURE__ */ jsx("div", {
              className: "feature-icon",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                icon: faUsers
              })
            }), /* @__PURE__ */ jsx("h3", {
              children: "Equipo Experto"
            }), /* @__PURE__ */ jsx("p", {
              children: "Profesionales altamente capacitados y especializados"
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.4,
            className: "feature-item",
            children: [/* @__PURE__ */ jsx("div", {
              className: "feature-icon",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                icon: faShieldAlt
              })
            }), /* @__PURE__ */ jsx("h3", {
              children: "Seguridad"
            }), /* @__PURE__ */ jsx("p", {
              children: "Sistemas y protocolos avanzados para proteger su carga"
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.5,
            className: "feature-item",
            children: [/* @__PURE__ */ jsx("div", {
              className: "feature-icon",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                icon: faHandshake
              })
            }), /* @__PURE__ */ jsx("h3", {
              children: "Atención Personalizada"
            }), /* @__PURE__ */ jsx("p", {
              children: "Soluciones adaptadas a las necesidades específicas de cada cliente"
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeUp",
            delay: 0.6,
            className: "feature-item",
            children: [/* @__PURE__ */ jsx("div", {
              className: "feature-icon",
              children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                icon: faChartLine
              })
            }), /* @__PURE__ */ jsx("h3", {
              children: "Innovación"
            }), /* @__PURE__ */ jsx("p", {
              children: "Constante mejora y adopción de nuevas tecnologías"
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "alliances-section section",
      children: /* @__PURE__ */ jsx("div", {
        className: "container",
        children: /* @__PURE__ */ jsxs("div", {
          className: "alliances-grid",
          children: [/* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeRight",
            className: "alliances-content",
            children: [/* @__PURE__ */ jsx("div", {
              className: "section-title text-left",
              children: /* @__PURE__ */ jsx("h2", {
                children: "Participación Activa en Gremios y Cámaras"
              })
            }), /* @__PURE__ */ jsx("p", {
              children: "Formamos parte activa de las principales asociaciones y gremios del sector logístico, lo que nos permite estar a la vanguardia de las tendencias y regulaciones de la industria, ofreciendo así un servicio actualizado y de calidad a nuestros clientes."
            }), /* @__PURE__ */ jsxs("div", {
              className: "alliances-logos",
              children: [/* @__PURE__ */ jsx(AnimatedElement, {
                animation: "fadeIn",
                delay: 0.1,
                className: "alliance-logo",
                children: /* @__PURE__ */ jsx("img", {
                  src: "https://via.placeholder.com/120x60",
                  alt: "Alianza 1"
                })
              }), /* @__PURE__ */ jsx(AnimatedElement, {
                animation: "fadeIn",
                delay: 0.2,
                className: "alliance-logo",
                children: /* @__PURE__ */ jsx("img", {
                  src: "https://via.placeholder.com/120x60",
                  alt: "Alianza 2"
                })
              }), /* @__PURE__ */ jsx(AnimatedElement, {
                animation: "fadeIn",
                delay: 0.3,
                className: "alliance-logo",
                children: /* @__PURE__ */ jsx("img", {
                  src: "https://via.placeholder.com/120x60",
                  alt: "Alianza 3"
                })
              }), /* @__PURE__ */ jsx(AnimatedElement, {
                animation: "fadeIn",
                delay: 0.4,
                className: "alliance-logo",
                children: /* @__PURE__ */ jsx("img", {
                  src: "https://via.placeholder.com/120x60",
                  alt: "Alianza 4"
                })
              })]
            })]
          }), /* @__PURE__ */ jsxs(AnimatedElement, {
            animation: "fadeLeft",
            className: "certifications-content",
            children: [/* @__PURE__ */ jsx("div", {
              className: "section-title text-left",
              children: /* @__PURE__ */ jsx("h2", {
                children: "Nuestras Certificaciones"
              })
            }), /* @__PURE__ */ jsx("p", {
              children: "Contamos con las certificaciones más importantes de la industria, garantizando que nuestros procesos cumplen con los más altos estándares de calidad y seguridad."
            }), /* @__PURE__ */ jsxs("div", {
              className: "certification-items",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "certification-item",
                children: [/* @__PURE__ */ jsx("img", {
                  src: "https://via.placeholder.com/80x80",
                  alt: "Certificación ISO"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "certification-details",
                  children: [/* @__PURE__ */ jsx("h4", {
                    children: "ISO 9001:2015"
                  }), /* @__PURE__ */ jsx("p", {
                    children: "Sistema de Gestión de Calidad"
                  })]
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "certification-item",
                children: [/* @__PURE__ */ jsx("img", {
                  src: "https://via.placeholder.com/80x80",
                  alt: "Certificación OEA"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "certification-details",
                  children: [/* @__PURE__ */ jsx("h4", {
                    children: "Operador Económico Autorizado"
                  }), /* @__PURE__ */ jsx("p", {
                    children: "Certificación aduanera de seguridad"
                  })]
                })]
              })]
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx("section", {
      className: "cta-section",
      children: /* @__PURE__ */ jsx("div", {
        className: "container",
        children: /* @__PURE__ */ jsxs(AnimatedElement, {
          animation: "fadeUp",
          className: "cta-content",
          children: [/* @__PURE__ */ jsx("h2", {
            children: "Trabajemos juntos"
          }), /* @__PURE__ */ jsx("p", {
            children: "Descubre cómo podemos ayudarte a optimizar tu cadena logística con soluciones personalizadas."
          }), /* @__PURE__ */ jsx("a", {
            href: "/contactanos",
            className: "btn btn-primary",
            children: "Contáctanos"
          })]
        })
      })
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sobreNosotros,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const LocationsMap = ({ apiKey, locations, onSelectLocation, searchTerm, onSearchChange, hideSearch = false, panelMode = "list" }) => {
  var _a, _b;
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const effectiveSearch = (searchTerm ?? localSearchTerm).trim();
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setMapLoaded(true);
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey]);
  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;
    const defaultLocation = locations.length > 0 ? locations[0].coordinates : { lat: 40.416775, lng: -3.70379 };
    const newMap = new google.maps.Map(mapRef.current, {
      zoom: 12,
      center: defaultLocation,
      mapTypeControl: true,
      streetViewControl: true,
      zoomControl: true,
      fullscreenControl: true
    });
    setMap(newMap);
  }, [mapLoaded, locations]);
  useEffect(() => {
    if (!map || !mapLoaded) return;
    markers.forEach((marker) => marker.setMap(null));
    const newMarkers = [];
    filteredLocations.forEach((location2) => {
      const marker = new google.maps.Marker({
        position: location2.coordinates,
        map,
        title: location2.name,
        animation: google.maps.Animation.DROP
      });
      const infowindow = new google.maps.InfoWindow({
        content: `
          <div class="map-info-window">
            <h3>${location2.name}</h3>
            <p>${location2.address}</p>
            ${location2.phone ? `<p><strong>Teléfono:</strong> ${location2.phone}</p>` : ""}
            ${location2.email ? `<p><strong>Email:</strong> ${location2.email}</p>` : ""}
          </div>
        `
      });
      marker.addListener("click", () => {
        newMarkers.forEach((m) => {
          var _a2;
          m.getTitle() !== marker.getTitle() && ((_a2 = m["infowindow"]) == null ? void 0 : _a2.close());
        });
        infowindow.open({
          anchor: marker,
          map
        });
        marker["infowindow"] = infowindow;
        setSelectedLocation(location2);
        if (onSelectLocation) onSelectLocation(location2);
        map.panTo(location2.coordinates);
      });
      newMarkers.push(marker);
    });
    setMarkers(newMarkers);
    if (selectedLocation) {
      map.panTo(selectedLocation.coordinates);
      const selectedMarker = newMarkers.find(
        (marker) => marker.getTitle() === selectedLocation.name
      );
      if (selectedMarker) {
        google.maps.event.trigger(selectedMarker, "click");
      }
    }
  }, [map, filteredLocations, selectedLocation, mapLoaded]);
  useEffect(() => {
    if (effectiveSearch === "") {
      setFilteredLocations(locations);
    } else {
      const filtered = locations.filter(
        (location2) => location2.name.toLowerCase().includes(effectiveSearch.toLowerCase()) || location2.address.toLowerCase().includes(effectiveSearch.toLowerCase())
      );
      setFilteredLocations(filtered);
    }
  }, [effectiveSearch, locations]);
  const handleLocationClick = (location2) => {
    setSelectedLocation(location2);
    if (onSelectLocation) onSelectLocation(location2);
  };
  return /* @__PURE__ */ jsxs("div", { className: "map-locations-container", children: [
    !hideSearch && /* @__PURE__ */ jsxs("div", { className: "map-search-container map-search-top", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Busca tu ciudad",
          value: searchTerm ?? localSearchTerm,
          onChange: (e) => onSearchChange ? onSearchChange(e.target.value) : setLocalSearchTerm(e.target.value),
          className: "map-location-search-input"
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "map-search-button", "aria-label": "Buscar", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "map-content-wrapper", children: [
      /* @__PURE__ */ jsx("div", { className: `map-search-and-locations ${panelMode === "details" ? "panel-details" : ""}`, children: panelMode === "list" ? /* @__PURE__ */ jsx("div", { className: "map-locations-list", children: filteredLocations.length > 0 ? filteredLocations.map((location2) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `map-location-item ${(selectedLocation == null ? void 0 : selectedLocation.id) === location2.id ? "selected" : ""}`,
          onClick: () => handleLocationClick(location2),
          children: [
            /* @__PURE__ */ jsx("h3", { children: location2.name }),
            /* @__PURE__ */ jsx("p", { children: location2.address }),
            location2.phone && /* @__PURE__ */ jsxs("p", { className: "map-location-detail", children: [
              /* @__PURE__ */ jsx("strong", { children: "Tel:" }),
              " ",
              location2.phone
            ] })
          ]
        },
        location2.id
      )) : /* @__PURE__ */ jsx("div", { className: "map-no-locations", children: "No se encontraron ubicaciones" }) }) : /* @__PURE__ */ jsx("div", { className: "location-details-panel", children: /* @__PURE__ */ jsxs("div", { className: "details-inner", children: [
        /* @__PURE__ */ jsx("h3", { children: ((_a = selectedLocation ?? filteredLocations[0] ?? locations[0]) == null ? void 0 : _a.name) ?? "Ubicación" }),
        /* @__PURE__ */ jsx("p", { className: "details-address", children: (_b = selectedLocation ?? filteredLocations[0] ?? locations[0]) == null ? void 0 : _b.address })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "map-container", ref: mapRef })
    ] })
  ] });
};
const sampleLocations = [
  {
    id: "1",
    name: "Taurel Oficina Central",
    address: "Torre Q, Piso 2 Ofic. 2018, Carretera de Alto Hatillo, Miranda",
    coordinates: { lat: 10.421543, lng: -66.824137 },
    phone: "+58 212 123 4567",
    email: "info@taurel.com",
    schedule: "Lun-Vie: 8:00 AM - 6:00 PM"
  },
  {
    id: "2",
    name: "Taurel Almacén Principal",
    address: "Zona Industrial, Galpón 15, Calle Principal, Caracas",
    coordinates: { lat: 10.461212, lng: -66.883214 },
    phone: "+58 212 234 5678",
    schedule: "Lun-Vie: 7:00 AM - 4:00 PM, Sáb: 8:00 AM - 12:00 PM"
  },
  {
    id: "3",
    name: "Taurel Centro Logístico",
    address: "Av. Intercomunal, Centro Empresarial, Torre B, Piso 3, Valencia",
    coordinates: { lat: 10.176445, lng: -67.998541 },
    phone: "+58 241 345 6789",
    schedule: "Lun-Vie: 8:00 AM - 5:00 PM"
  },
  {
    id: "4",
    name: "Taurel Puerto Marítimo",
    address: "Terminal Marítima, Zona Portuaria, La Guaira",
    coordinates: { lat: 10.599294, lng: -66.932928 },
    phone: "+58 212 456 7890",
    schedule: "24 horas, todos los días"
  },
  {
    id: "5",
    name: "Taurel Oficina Maracaibo",
    address: "Centro Comercial Lago Mall, Piso 2, Local 45, Maracaibo",
    coordinates: { lat: 10.667564, lng: -71.623129 },
    phone: "+58 261 567 8901",
    email: "maracaibo@taurel.com",
    schedule: "Lun-Vie: 8:30 AM - 5:30 PM"
  }
];
const LocationsFinder = ({ googleMapsApiKey }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [term, setTerm] = useState("");
  return /* @__PURE__ */ jsxs("div", { className: "map-component", children: [
    /* @__PURE__ */ jsx("div", { className: "map-component-card", children: /* @__PURE__ */ jsx(
      LocationsMap,
      {
        apiKey: googleMapsApiKey,
        locations: sampleLocations,
        onSelectLocation: setSelectedLocation,
        searchTerm: term,
        onSearchChange: setTerm,
        hideSearch: false,
        panelMode: "list"
      }
    ) }),
    selectedLocation && /* @__PURE__ */ jsxs("div", { className: "selected-location-details", children: [
      /* @__PURE__ */ jsx("h3", { children: selectedLocation.name }),
      /* @__PURE__ */ jsxs("div", { className: "details-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "detail-item", children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faMapMarkerAlt, className: "detail-icon" }),
          /* @__PURE__ */ jsx("p", { children: selectedLocation.address })
        ] }),
        selectedLocation.phone && /* @__PURE__ */ jsxs("div", { className: "detail-item", children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faPhone, className: "detail-icon" }),
          /* @__PURE__ */ jsx("p", { children: selectedLocation.phone })
        ] }),
        selectedLocation.email && /* @__PURE__ */ jsxs("div", { className: "detail-item", children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faEnvelope, className: "detail-icon" }),
          /* @__PURE__ */ jsx("p", { children: selectedLocation.email })
        ] }),
        selectedLocation.schedule && /* @__PURE__ */ jsxs("div", { className: "detail-item", children: [
          /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faClock, className: "detail-icon" }),
          /* @__PURE__ */ jsx("p", { children: selectedLocation.schedule })
        ] })
      ] })
    ] })
  ] });
};
const hexaImage = "/assets/hexa-image-yvMA19k2.png";
const hexagonaWhite = "/assets/Hexagonos-5-BIRacGNI.png";
function meta() {
  return [{
    title: "Contáctanos - Taurel"
  }, {
    name: "description",
    content: "Ponte en contacto con Taurel para solicitar información sobre nuestros servicios logísticos"
  }];
}
const contactanos = UNSAFE_withComponentProps(function Contactanos() {
  const [formData, setFormData] = useState({
    solicitud: "",
    nombre: "",
    email: "",
    telefono: "",
    empresa: ""
  });
  const [errors, setErrors] = useState({
    solicitud: "",
    nombre: "",
    email: "",
    telefono: "",
    empresa: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const locations = [{
    city: "Caracas, Dtto. Capital",
    phone: "+58212-5584563"
  }, {
    city: "La Guaira, Edo. Vargas",
    phone: "+58212-5584563"
  }, {
    city: "Catia La Mar, Vargas",
    phone: "+58212-5584563"
  }, {
    city: "Valencia, Edo. Carabobo",
    phone: "+58212-5584563"
  }, {
    city: "El Guamache, Nueva Esparta",
    phone: "+58212-5584563"
  }, {
    city: "Maracaibo, Edo. Zulia",
    phone: "+58212-5584563"
  }, {
    city: "Barquisimeto, Edo. Lara",
    phone: "+58212-5584563"
  }, {
    city: "Pto. Cabello, Edo. Carabobo",
    phone: "+58212-5584563"
  }, {
    city: "San Antonio del táchira, Edo. Táchira",
    phone: "+58212-5584563"
  }, {
    city: "Santa Elena de Uairén, Bolívar",
    phone: "+58212-5584563"
  }];
  const validateForm = () => {
    const newErrors = {
      solicitud: validateField("solicitud", formData.solicitud),
      nombre: validateField("nombre", formData.nombre),
      email: validateField("email", formData.email),
      telefono: validateField("telefono", formData.telefono),
      empresa: validateField("empresa", formData.empresa)
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "solicitud":
        if (!value.trim()) {
          error = "Por favor, indique su solicitud o requerimiento";
        }
        break;
      case "nombre":
        if (!value.trim()) {
          error = "El nombre y apellido es requerido";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "El correo electrónico es requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Por favor, ingrese un correo electrónico válido";
        }
        break;
      case "telefono":
        if (!value.trim()) {
          error = "El número de teléfono es requerido";
        }
        break;
      case "empresa":
        if (!value.trim()) {
          error = "El nombre de la empresa es requerido";
        }
        break;
    }
    return error;
  };
  const handleInputChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      console.log("Datos del formulario:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      setFormData({
        solicitud: "",
        nombre: "",
        email: "",
        telefono: "",
        empresa: ""
      });
      alert("¡Formulario enviado exitosamente!");
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      alert("Error al enviar el formulario. Por favor, inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const isFormValid = formData.solicitud.trim() && formData.nombre.trim() && formData.email.trim() && formData.telefono.trim() && formData.empresa.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  return /* @__PURE__ */ jsxs("div", {
    className: "contactanos-page",
    children: [/* @__PURE__ */ jsx("section", {
      className: "taurel-contact-section",
      children: /* @__PURE__ */ jsxs("div", {
        className: "taurel-contact-container",
        children: [/* @__PURE__ */ jsx(motion.div, {
          className: "taurel-contact-header",
          initial: {
            opacity: 0,
            y: 20
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 1
          },
          children: /* @__PURE__ */ jsx("h1", {
            children: "Contáctanos"
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "taurel-contact-content",
          children: /* @__PURE__ */ jsxs("div", {
            className: "taurel-contact-columns",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "taurel-contact-locations-container",
              children: [/* @__PURE__ */ jsx("div", {
                className: "taurel-contact-left-column",
                children: locations.slice(0, 5).map((location2, index) => /* @__PURE__ */ jsxs("div", {
                  className: "taurel-contact-item",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "taurel-contact-bullet"
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "taurel-contact-info",
                    children: [/* @__PURE__ */ jsx("span", {
                      className: "taurel-contact-city",
                      children: location2.city
                    }), /* @__PURE__ */ jsxs("span", {
                      className: "taurel-contact-phone",
                      children: [/* @__PURE__ */ jsx(FontAwesomeIcon, {
                        icon: faPhone
                      }), location2.phone]
                    })]
                  })]
                }, index))
              }), /* @__PURE__ */ jsx("div", {
                className: "taurel-contact-right-column",
                children: locations.slice(5, 10).map((location2, index) => /* @__PURE__ */ jsxs("div", {
                  className: "taurel-contact-item",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "taurel-contact-bullet"
                  }), /* @__PURE__ */ jsxs("div", {
                    className: "taurel-contact-info",
                    children: [/* @__PURE__ */ jsx("span", {
                      className: "taurel-contact-city",
                      children: location2.city
                    }), /* @__PURE__ */ jsxs("span", {
                      className: "taurel-contact-phone",
                      children: [/* @__PURE__ */ jsx(FontAwesomeIcon, {
                        icon: faPhone
                      }), location2.phone]
                    })]
                  })]
                }, index))
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "taurel-contact-image-container",
              children: /* @__PURE__ */ jsx("div", {
                className: "taurel-contact-hexagon",
                children: /* @__PURE__ */ jsx("img", {
                  src: hexaImage,
                  alt: "Profesional Taurel"
                })
              })
            })]
          })
        })]
      })
    }), /* @__PURE__ */ jsxs("section", {
      className: "contact-form-section",
      children: [/* @__PURE__ */ jsx("div", {
        className: "container",
        children: /* @__PURE__ */ jsxs(motion.div, {
          className: "contact-form-content",
          initial: {
            opacity: 0,
            y: 50
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: true
          },
          transition: {
            duration: 0.8
          },
          children: [/* @__PURE__ */ jsxs("div", {
            className: "form-header",
            children: [/* @__PURE__ */ jsx("h2", {
              children: "¿Cómo podemos ayudarte?"
            }), /* @__PURE__ */ jsx("p", {
              children: "Si tiene alguna pregunta sobre Taurel o puede cómo podemos ayudar con cualquier asunto relacionado con logística, póngase en contacto con nuestra gente de atendimiento."
            })]
          }), /* @__PURE__ */ jsxs("form", {
            className: "contact-form",
            onSubmit: handleSubmit,
            children: [/* @__PURE__ */ jsxs("div", {
              className: "form-group form-group-full",
              children: [/* @__PURE__ */ jsx("input", {
                type: "text",
                name: "solicitud",
                value: formData.solicitud,
                onChange: handleInputChange,
                className: `input-white ${errors.solicitud ? "input-error" : ""}`,
                placeholder: "Indique su solicitud o requerimiento...",
                required: true
              }), errors.solicitud && /* @__PURE__ */ jsx("span", {
                className: "error-message",
                children: errors.solicitud
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "form-row",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "form-group",
                children: [/* @__PURE__ */ jsx("input", {
                  type: "text",
                  name: "nombre",
                  value: formData.nombre,
                  onChange: handleInputChange,
                  className: errors.nombre ? "input-error" : "",
                  placeholder: "Nombre y Apellido",
                  required: true
                }), errors.nombre && /* @__PURE__ */ jsx("span", {
                  className: "error-message",
                  children: errors.nombre
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "form-group",
                children: [/* @__PURE__ */ jsx("input", {
                  type: "email",
                  name: "email",
                  value: formData.email,
                  onChange: handleInputChange,
                  className: errors.email ? "input-error" : "",
                  placeholder: "Correo Electrónico",
                  required: true
                }), errors.email && /* @__PURE__ */ jsx("span", {
                  className: "error-message",
                  children: errors.email
                })]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "form-row",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "form-group",
                children: [/* @__PURE__ */ jsx("input", {
                  type: "tel",
                  name: "telefono",
                  value: formData.telefono,
                  onChange: handleInputChange,
                  className: errors.telefono ? "input-error" : "",
                  placeholder: "Número de teléfono",
                  required: true
                }), errors.telefono && /* @__PURE__ */ jsx("span", {
                  className: "error-message",
                  children: errors.telefono
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "form-group",
                children: [/* @__PURE__ */ jsx("input", {
                  type: "text",
                  name: "empresa",
                  value: formData.empresa,
                  onChange: handleInputChange,
                  className: errors.empresa ? "input-error" : "",
                  placeholder: "Empresa",
                  required: true
                }), errors.empresa && /* @__PURE__ */ jsx("span", {
                  className: "error-message",
                  children: errors.empresa
                })]
              })]
            }), /* @__PURE__ */ jsx("button", {
              type: "submit",
              className: `btn-send ${!isFormValid ? "btn-disabled" : ""}`,
              disabled: !isFormValid || isSubmitting,
              children: isSubmitting ? "Enviando..." : "Enviar"
            })]
          })]
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "hex-decorations-form",
        children: [/* @__PURE__ */ jsx("div", {
          className: "hex-decoration hex-4"
        }), /* @__PURE__ */ jsx("div", {
          className: "hex-decoration hex-5"
        })]
      })]
    }), /* @__PURE__ */ jsxs("section", {
      className: "map-location-section",
      children: [/* @__PURE__ */ jsx("img", {
        className: "hexagon-map-left",
        src: hexagonaWhite,
        alt: "Mapa de Ubicación"
      }), /* @__PURE__ */ jsx("img", {
        className: "hexagon-map-right",
        src: hexagonaWhite,
        alt: "Mapa de Ubicación"
      }), /* @__PURE__ */ jsx("img", {
        className: "hexagon-map-center",
        src: mapapoints,
        alt: "Mapa de Ubicación"
      }), /* @__PURE__ */ jsx("div", {
        className: "container",
        children: /* @__PURE__ */ jsxs(motion.div, {
          className: "map-content",
          initial: {
            opacity: 0,
            y: 50
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: true
          },
          transition: {
            duration: 0.8
          },
          children: [/* @__PURE__ */ jsxs("div", {
            className: "map-header",
            children: [/* @__PURE__ */ jsx("h2", {
              children: "Taurel va a donde tú estés"
            }), /* @__PURE__ */ jsx("p", {
              children: "Tu destino fácil de encontrar, visitanos en la ubicación de preferencia"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "map-container",
            children: [/* @__PURE__ */ jsx("div", {
              className: "map-wrapper",
              children: /* @__PURE__ */ jsx(LocationsFinder, {
                googleMapsApiKey: "AIzaSyBR74ZoUfUzm9CWR4T8FNDc_BgsAsPoWho"
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "office-hours",
              children: /* @__PURE__ */ jsxs("p", {
                children: [/* @__PURE__ */ jsx("strong", {
                  children: "Horario de atención: "
                }), "Lunes a Viernes. 8:00am - 5:00pm."]
              })
            })]
          })]
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "hex-decorations-map",
        children: [/* @__PURE__ */ jsx("div", {
          className: "hex-decoration hex-6"
        }), /* @__PURE__ */ jsx("div", {
          className: "hex-decoration hex-7"
        }), /* @__PURE__ */ jsx("div", {
          className: "hex-decoration hex-8"
        })]
      })]
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: contactanos,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CoW4R_Jb.js", "imports": ["/assets/chunk-B7RQU5TL-BroClf-_.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-DRqG1ulh.js", "imports": ["/assets/chunk-B7RQU5TL-BroClf-_.js", "/assets/logo-Dl2k5jLO.js", "/assets/proxy-C4QdbsGg.js", "/assets/index-OZWrxAIy.js"], "css": ["/assets/root-BUily4j1.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-B_cpuXZb.js", "imports": ["/assets/chunk-B7RQU5TL-BroClf-_.js", "/assets/AnimatedElement-BS1cChOP.js", "/assets/proxy-C4QdbsGg.js", "/assets/logo-Dl2k5jLO.js", "/assets/maos2-BUkoU8aT.js"], "css": ["/assets/home-BHKH9vBt.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/servicios": { "id": "routes/servicios", "parentId": "root", "path": "servicios", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/servicios-D1Xmaj8W.js", "imports": ["/assets/chunk-B7RQU5TL-BroClf-_.js", "/assets/AnimatedElement-BS1cChOP.js", "/assets/index-OZWrxAIy.js", "/assets/index-DBB2MkHp.js", "/assets/proxy-C4QdbsGg.js"], "css": ["/assets/servicios-kNSspQWR.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/sobre-nosotros": { "id": "routes/sobre-nosotros", "parentId": "root", "path": "sobre-nosotros", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/sobre-nosotros-CoeDF9I9.js", "imports": ["/assets/chunk-B7RQU5TL-BroClf-_.js", "/assets/AnimatedElement-BS1cChOP.js", "/assets/index-OZWrxAIy.js", "/assets/index-DBB2MkHp.js", "/assets/proxy-C4QdbsGg.js"], "css": ["/assets/sobre-nosotros-CjZO5rel.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contactanos": { "id": "routes/contactanos", "parentId": "root", "path": "contactanos", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/contactanos-DjMY1g91.js", "imports": ["/assets/chunk-B7RQU5TL-BroClf-_.js", "/assets/index-OZWrxAIy.js", "/assets/index-DBB2MkHp.js", "/assets/maos2-BUkoU8aT.js", "/assets/proxy-C4QdbsGg.js"], "css": ["/assets/contactanos-DRrqELJ0.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-768e810d.js", "version": "768e810d", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/servicios": {
    id: "routes/servicios",
    parentId: "root",
    path: "servicios",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/sobre-nosotros": {
    id: "routes/sobre-nosotros",
    parentId: "root",
    path: "sobre-nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/contactanos": {
    id: "routes/contactanos",
    parentId: "root",
    path: "contactanos",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
