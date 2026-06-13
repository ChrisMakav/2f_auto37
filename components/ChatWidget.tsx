"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

const CUSTOM_THEME = `
  :root {
    --chat--color--primary:            #E94560;
    --chat--color--primary-shade-50:   #D03350;
    --chat--color--primary--shade-100: #C02D47;
    --chat--color--secondary:          #E94560;
    --chat--color-secondary-shade-50:  #D03350;
    --chat--color-white:               #ffffff;
    --chat--color-light:               #F8F9FA;
    --chat--color-light-shade-50:      #E8E8E8;
    --chat--color-light-shade-100:     #D0D0D0;
    --chat--color-medium:              #8C8C8C;
    --chat--color-dark:                #1A1A2E;
    --chat--color-disabled:            #8C8C8C;
    --chat--color-typing:              #484848;

    --chat--window--width:             380px;
    --chat--window--height:            560px;
    --chat--window--border-radius:     16px;
    --chat--border-radius:             10px;

    --chat--header--background:        #1A1A2E;
    --chat--header--color:             #ffffff;
    --chat--body--background:          #ffffff;

    --chat--message--bot--background:  #F8F9FA;
    --chat--message--bot--color:       #1A1A2E;
    --chat--message--user--background: #E94560;
    --chat--message--user--color:      #ffffff;
    --chat--message--border-radius:    10px;

    --chat--input--background:                   #ffffff;
    --chat--input--text-color:                   #1A1A2E;
    --chat--input--container--background:        #F8F9FA;
    --chat--input--container--border:            1px solid #E8E8E8;
    --chat--input--container--border-radius:     10px;
    --chat--input--container--padding:           0.5rem;
    --chat--input--send--button--background:        #E94560;
    --chat--input--send--button--background-hover:  #D03350;
    --chat--input--send--button--color:             #ffffff;
    --chat--textarea--height:                    52px;

    --chat--footer--background:        #F8F9FA;
    --chat--footer--color:             #8C8C8C;
    --chat--footer--border-top:        1px solid #E8E8E8;

    --chat--toggle--background:        #E94560;
    --chat--toggle--hover--background: #D03350;
    --chat--toggle--active--background:#C02D47;
    --chat--toggle--color:             #ffffff;
    --chat--toggle--size:              60px;
    --chat--toggle--border-radius:     50%;
  }
`;

export function ChatWidget() {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://n8n.srv1644260.hstgr.cloud/webhook/a4f8d702-58f9-4acd-8b7f-1ea8bebc6587/chat",
      mode: "window",
      showWelcomeScreen: false,
      loadPreviousSession: false,
      initialMessages: [
        "Bonjour ! Je suis l'assistant virtuel de 2F AUTO37.",
        "Je peux vous renseigner sur nos services, horaires, tarifs ou vous aider à prendre rendez-vous. Comment puis-je vous aider ?",
      ],
      i18n: {
        en: {
          title: "Assistant 2F AUTO37",
          subtitle: "Disponible 24h/24 pour répondre à vos questions",
          footer: "",
          getStarted: "Démarrer la conversation",
          inputPlaceholder: "Posez votre question...",
          closeButtonTooltip: "Fermer",
        },
      },
      defaultLanguage: "en",
    });

    // Inject theme AFTER n8n CSS so our variables win
    const style = document.createElement("style");
    style.id = "n8n-chat-custom-theme";
    style.textContent = CUSTOM_THEME;
    document.head.appendChild(style);

    return () => {
      document.getElementById("n8n-chat-custom-theme")?.remove();
    };
  }, []);

  return null;
}
