/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SKILL_NAME: 'Curiosidades de deportes',
            GET_FACT_MESSAGE: 'Here\'s your fact: ',
            HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The Space Facts skill can\'t help you with that.  It can help you discover facts about space if you say tell me a space fact. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            STOP_MESSAGE: 'Goodbye!',
            FACTS:
            [
                'Only two black people have won gold medals in swimming at an Olympic Games.',
                'El primer gol en un Mundial de Futbol fue anotado el 13 de julio de 1930 en el enfrentamiento entre Francia y México, en Uruguay, por el francés Lucien Laurent',
                'Although soccer is the most popular sport among fans, it is not the most widely played in the world. The sport that has that title is nothing more and nothing less than swimming.',
                'For mountaineers, the “Death Zone” on Everest is in the last 850 meters, before reaching the top, since it is from that distance that most adventurers have died',
                'Until now, the only sport that has been practiced outside of planet Earth has been golf',
                'During Wimbledon in 2010 the longest tennis match in history was held. When the American John Isner and the Frenchman Nicholas Mahut met, they played for 11 hours, 6 minutes and 23 seconds, with a final score in favor of Isner',
                'In 776 B.C. the first Olympics made by and for women were held. They were baptized as "The Games of Hera" in honor of the Greek goddess protector of marriage',
                'Did you know that chess is a sport? This is how the International Olympic Committee considers it, because to play it not only requires mental dexterity, but the ability to create strategies and tactics, in addition to being a structured game with regulations, just like soccer or baseball',
                
                
            ],
        }
    },
    es: {
        translation: {
            SKILL_NAME: 'Curiosidades de deportes',
            GET_FACT_MESSAGE: 'Aquí está tu curiosidad: ',
            HELP_MESSAGE: 'Puedes decir dime una curiosidad de deportes o puedes decir salir... Cómo te puedo ayudar?',
            HELP_REPROMPT: 'Como te puedo ayudar?',
            FALLBACK_MESSAGE: 'La skill curiosidades de deportes no te puede ayudar con eso.  Te puede ayudar a descubrir curiosidades sobre el deporte si dices dime una curiosidad de deportes. Como te puedo ayudar?',
            FALLBACK_REPROMPT: 'Como te puedo ayudar?',
            ERROR_MESSAGE: 'Lo sentimos, se ha producido un error.',
            STOP_MESSAGE: 'Adiós!',
            FACTS:
                [
                'Sólo dos personas negras han ganado medallas de oro en natación en unos Juegos Olímpicos',
                'Aunque el futbol es el deporte más popular entre los fanáticos, no es el que más se practica en el mundo. El deporte que tiene ese título es nada más y nada menos que la natación',
                'El primer gol en un Mundial de Futbol fue anotado el 13 de julio de 1930 en el enfrentamiento entre Francia y México, en Uruguay, por el francés Lucien Laurent',
                'Para los alpinistas, la “Zona de Muerte” en el Everest se encuentra en los últimos 850 metros, antes de llegar a la cima, pues es a partir de esa distancia que la mayoría de aventureros ha fallecido',
                'Hasta ahora, el único deporte que se ha practicado fuera del planeta Tierra ha sido el golf',
                'Durante Wimbledon del 2010 se llevó a cabo el partido de tenis más largo de la historia. Cuando el estadounidense John Isner y el francés Nicholas Mahut se enfrentaron, jugaron por 11 horas, 6 minutos y 23 segundos, con un marcador final a favor de Isner',
                'En el año 776 a.C. se llevaron a cabo las primeras olimpiadas hechas por y para mujeres. Fueron bautizadas como “Los Juegos de Hera” en honor a la diosa griega protectora del matrimonio',
                '¿Sabías que el ajedrez es un deporte? Así lo considera el Comité Olímpico Internacional, pues para jugarlo no sólo se requiere destreza mental, sino la capacidad de crear estrategias y tácticas, además de que es un juego estructurado con reglamento, tal y como el fútbol o el béisbol',
                ],
        }
    },

}