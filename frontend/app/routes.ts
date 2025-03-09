import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/Home.tsx"),
    route("about", "routes/About.tsx"),
    route("contact", "routes/Contact.tsx"),
    route("services", "routes/Services.tsx"), // Add the new route here
] satisfies RouteConfig;