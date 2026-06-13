"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

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
  }, []);

  return null;
}
