import connection from "./assets/connection.png";
import dollar from "./assets/dollar.png";
import key from "./assets/key.png";
import message from "./assets/message.png";
import people from "./assets/people.png";
import puzzle from "./assets/puzzle.png";

export const data = [
    {
        id: 1,
        img: connection,
        alt: "connection",
        head: "Using Abstract",
        paragraph: "Abstract lets you manage, version, and document your designs in one place.",
        link: "/abstract",
    },
    {
        id: 2,
        img: people,
        alt: "people",
        head: "Manage your account",
        paragraph: "Configure your account settings, such as your email, profile details, and password.",
        link: "/account"
    },
    {
        id: 3,
        img: puzzle,
        alt: "puzzle",
        head: "Manage organizations, teams, and projects",
        paragraph: "Use Abstract organizations, teams, and projects to organize your people and your work.",
        link: "/projects"
    },
    {
        id: 4,
        img: dollar,
        alt: "dollar",
        head: "Manage billing",
        paragraph: "Change subscriptions and payment details.",
        link: "/billing"
    },
    {
        id: 5,
        img: key,
        alt: "key",
        head: "Authenticate to Abstract",
        paragraph: "Abstract lets you manage, version, and document your designs in one place.",
        link: "/authenticate"
    },
    {
        id: 6,
        img: message,
        alt: "message",
        head: "Abstract support",
        paragraph: "Get in touch with a human.",
        link: "/support"
    }
]