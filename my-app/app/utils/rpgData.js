// app/utils/rpgData.js

export const races = [
    {
        nome: 'Anões',
        talentos: [
            {
                nome: 'Natureza inflexível',
                descricao: 'Anões não podem ser controlados. Role com dupla vantagem testes de Força de Vontade para não se submeter a alguém. No entanto, o mal pode torná-los escravos de seus próprios defeitos.'
            },
            {
                nome: 'Destreza Manual',
                descricao: 'Anões têm aptidão natural para tudo que envolve o uso das mãos. Acrescente seu nível +1 a qualquer teste manual com instrumentos pequenos.'
            }
        ],
        mauHabito: {
            nome: 'Desgosto por Elfos',
            descricao: 'Odeiam elfos. Role Força de Vontade (dif 18) para não ser agressivo. Tratam elfos de forma bruta e gostam de vê-los se esforçando.'
        },
        bencao: {
            nome: 'Vivam pequenas pedras',
            descricao: 'Ao cair na zona da barra de Força de Vontade, a cada dado que você passar, pode voltar com CON + nível + 1d de Força de Vontade, mas perde 1 ponto permanente de Força de Vontade.'
        },
        maldicao: {
            nome: 'Amarão mais as coisas que fazem',
            descricao: 'Anões têm um amor imenso por tudo que conquistam, mas aquilo que fizeram com as próprias mãos é mais precioso que seus próprios filhos.'
        }
    },
    {
        nome: 'Elfos',
        talentos: [
            {
                nome: 'Leveza élfica',
                descricao: 'Elfos são leves como plumas, reduzem pela metade os efeitos de terreno e têm vantagem em ações contra inimigos realmente maiores.'
            },
            {
                nome: 'Conhecimento das coisas elevadas',
                descricao: 'Some bônus de SAB + nível para definir o alcance da sua visão focal. Pode rolar INT (dif 16) para descobrir algo que a natureza lhe contar.'
            }
        ],
        mauHabito: {
            nome: 'Desgosto por Anões',
            descricao: 'Desgostam de anões. Role Força de Vontade (dif 16) para tratá-los com o mínimo de educação, caso contrário não consegue ser cortês ou justo.'
        },
        bencao: {
            nome: 'Imortalidade',
            descricao: 'São imortais e invencíveis ao tempo. Role com dupla vantagem testes de resistência a doenças e venenos. Reduza em 1 + seu nível qualquer penalidade por cansaço ou esforço extremo.'
        },
        maldicao: {
            nome: 'Coração lamentoso',
            descricao: 'Uma grande saudade pesa no coração de todo elfo. Sentem um vazio e que não pertencem a lugar nenhum, prendendo-se a amores e amizades como âncoras.'
        }
    },
    {
        nome: 'Ents',
        talentos: [
            {
                nome: 'É só uma árvore',
                descricao: 'Ents podem adormecer e se disfarçar como árvores. Inimigos rolam um teste de Sabedoria com desvantagem contra uma dificuldade igual ao seu atributo de Carisma + nível.'
            },
            {
                nome: 'Arremesso catapulta',
                descricao: 'Gaste uma ação completa para arremessar uma pedra, que contará como um arremesso de catapulta. Com +6 de Força, contará como um trabuco.'
            }
        ],
        mauHabito: {
            nome: 'Muito lentos',
            descricao: 'São devagar para falar e agir. Tenha -4 em testes de iniciativa e não possua ação extra, apenas ataque e movimento. Só pode falar 10 palavras por rodada.'
        },
        bencao: {
            nome: 'Pastores de árvores',
            descricao: 'Podem se comunicar e acalmar árvores. Role Sabedoria + nível (dif 14) para entender o que as árvores dizem. Contra árvores corrompidas, role Carisma + nível (dif 19).'
        },
        maldicao: {
            nome: 'Eles precisarão de madeira',
            descricao: 'Você não usa Força de Vontade como HP negativo, mas acrescenta seu próprio HP. Todo dano recebido é aplicado ao HP máximo, e você só pode se regenerar através de magia.'
        }
    },
    {
        nome: 'Hobbits',
        talentos: [
            {
                nome: 'Pequeninos',
                descricao: 'São pequenos e de passo rápido, passando despercebidos facilmente. Role com vantagem testes de furtividade; contra inimigos muito grandes, terá dupla vantagem.'
            },
            {
                nome: 'Pés-peludos',
                descricao: 'Seus pés resistentes os tornam mais rápidos. Você tem duas ações extras e seu movimento é maior.'
            }
        ],
        mauHabito: {
            nome: 'Tabagistas/Fumantes',
            descricao: 'Se ficar 3 dias sem fumar, terá -2 em Sabedoria e Inteligência. A cada 6 dias fumando, retire 1 ponto do atributo de Constituição.'
        },
        bencao: {
            nome: 'Mais do que aparentam',
            descricao: 'Possuem grande força de vontade. Você tem um dado a mais na barra de força de vontade e regenera (bônus de nível + 1) de força de vontade.'
        },
        maldicao: {
            nome: 'Amor às coisas pequenas',
            descricao: 'Amam suas vidas simples e se prendem a elas. Consomem duas porções de comida a mais e exigem mais conforto. Sentem extrema saudade de casa após 15 dias na estrada.'
        }
    },
    {
        nome: 'Humanos',
        talentos: [
            {
                nome: 'Dedicação dos Homens',
                descricao: 'Por terem poucos dias, precisam aprender muitos ofícios. Ganhe 2 perícias/ofícios extras.'
            },
            {
                nome: 'Ousadia dos Homens',
                descricao: 'São arrojados e não se intimidam. Role iniciativa com vantagem e tenha vantagem em testes de resistência contra intimidação ou medo.'
            }
        ],
        mauHabito: {
            nome: 'Egoístas',
            descricao: 'Escolha algo (dinheiro, poder, um objetivo). Você terá um desejo em seu coração que o moverá e será egoísta em relação a ele, nunca o prejudicando por outras causas.'
        },
        bencao: {
            nome: 'Mortalidade',
            descricao: 'Suas almas são livres e não se prendem a Arda. Sua alma não pode ser aprisionada, danificada ou restringida, ignorando maldições na alma, a menos que você se corrompa em vida.'
        },
        maldicao: {
            nome: 'A Fraqueza dos Homens',
            descricao: 'Têm corações fracos e desejosos de poder. Role com dupla desvantagem qualquer dado contra a sedução de poderes malignos.'
        }
    },
    {
        nome: 'Troca-peles',
        talentos: [
            {
                nome: 'Corpo forte',
                descricao: 'São maiores e mais resistentes. Para cada +1 em Constituição, reduza em 1 o número do dado de dano do oponente (ex: +3, o d8 do inimigo vira d5).'
            },
            {
                nome: 'Língua de Yavanna',
                descricao: 'Conseguem falar e entender os animais, o que os torna ótimos mestres de feras.'
            }
        ],
        mauHabito: {
            nome: 'Veganos',
            descricao: 'Amam os animais e não podem, em hipótese alguma, consumir ou suportar a ideia de se alimentar deles, vivendo de frutas, legumes, leite, pães e queijo.'
        },
        bencao: {
            nome: 'Grandes Ursos',
            descricao: 'Podem se transformar em poderosos ursos. Ganhe +2 em Força e Constituição, seus dados de dano físicos viram d10 e todo ataque seu se torna de grande magnitude.'
        },
        maldicao: {
            nome: 'Fúria Redobrada',
            descricao: 'Após um número de rodadas igual ao seu bônus de Força de Vontade, você entra em fúria, para de distinguir inimigos, ganha -5 no acerto e um ataque extra com os dentes.'
        }
    }
];

export const valar = [
    {
        nome: 'Manwë',
        bencao: {
            nome: 'Águias Gigantes',
            descricao: 'Caso esteja em perigo, você poderá se comunicar com um animal e as águias aparecerão para levá-lo para longe, concedendo um teleporte imediato para qualquer lugar da Terra-média.'
        },
        restricoes: 'Sejam heróis, ajudem as pessoas, derrotem o mal e criem paz e união entre os povos. Sejam amigos dos Elfos e dos Homens.',
        localAdoracao: 'Templos através de músicas, e a base do Monte Caradhras, onde se canta para Manwë.'
    },
    {
        nome: 'Varda',
        bencao: {
            nome: 'Esplendor de Varda',
            descricao: 'Ao erguer sua mão, libere um brilho que expulsa toda presença maligna num raio de 4,5m. Inimigos malignos recebem -5 em ações, criaturas de Morgoth sofrem 2d10 de dano e venenos/maldições são estagnados.'
        },
        restricoes: 'Não fique mais do que 2 noites sem cantar. Não tolere seres malignos ou instrumentos do mal perto de você.',
        localAdoracao: 'No meio de um oceano ou no Lago de Esgaroth à noite, contemplando as estrelas e cantando.'
    },
    {
        nome: 'Aulë (Mahal)',
        bencao: {
            nome: 'Toque de Aulë',
            descricao: 'Enquanto trabalha em um ofício, Aulë toca sua criação, tornando-a excepcional. O produto gerado aumenta sua qualidade em 3 níveis.'
        },
        restricoes: 'Ame e dê mais valor a todas as suas criações do que à sua família ou amigos. Seja "mão de vaca" e economize ao máximo.',
        localAdoracao: 'A forja. Forje algo com genuíno amor e com materiais novos para recarregar a bênção.'
    },
    {
        nome: 'Iavanna',
        bencao: {
            nome: 'Desperte Grande Kauri',
            descricao: 'Cercado pelo perigo, você pode clamar por Iavanna e uma árvore próxima despertará como um poderoso Huorn para lutar por você.'
        },
        restricoes: 'Você não pode matar ou machucar nenhuma árvore ou animal (exceto filhos de Morgoth). Deve desfazer qualquer armadilha de animal que encontrar.',
        localAdoracao: 'Floresta Velha, Floresta de Fangorn, templos.'
    },
    {
        nome: 'Oromë',
        bencao: {
            nome: 'Tempo de Oromë',
            descricao: 'Aumenta precisão e controle do ataque. Adicione +6 ao atributo de sabedoria, e seu próximo ataque terá +12d extra de dano; se estiver em overwatch, ataque com dupla vantagem.'
        },
        restricoes: 'Seguidores de Oromë não podem ter casa ou moradia fixa; sempre devem explorar. Deixe para o próximo: se sobrou comida, deixe uma parte para um viajante que está por vir. Se achou um atalho, compartilhe.',
        localAdoracao: 'Ame a caça. Cace seres malignos. Para cada inimigo diferente que você matar, recarregue a bênção.'
    },
    {
        nome: 'Vána',
        bencao: {
            nome: 'Olhos de Vána',
            descricao: 'Encanta inimigos com uma ilusão de beleza, distraindo-os. Para cada folha em sua mão, afete até 10 pessoas. Inimigos devem realizar um teste de Força de Vontade com desvantagem.'
        },
        restricoes: 'Reponha tudo o que tirar da natureza. Se matar um animal, poupe a mãe e os filhotes. Se colher uma fruta, plante uma semente. Nunca pegue nada de alguém sem deixar algo de igual valor em troca.',
        localAdoracao: 'Templos ou florestas, especialmente Lothlórien.'
    },
    {
        nome: 'Mantus (Namo)',
        bencao: {
            nome: 'Merecedor de Mantus',
            descricao: 'Se você falecer, pode retornar à vida. Fique com HP e mana totais, e acrescente metade de cada como novo HP/mana máximo. Aumente seu dado de dano.'
        },
        restricoes: 'Seja fiel à justiça. Siga as leis. Não mate nenhum filho de Eru (Homens, Hobbits, Anões, etc.), não adultere, não roube, não minta. Anões e Ents não recebem esta bênção.',
        localAdoracao: 'Exorcize uma criatura tumular para recarregar a habilidade.'
    },
    {
        nome: 'Varië',
        bencao: {
            nome: 'Registros de Varië',
            descricao: 'Revele no mapa todos os inimigos e seus planos de rota num raio de 100 km.'
        },
        restricoes: 'Você não pode matar o último filho de uma linhagem. Não pode destruir ou permitir a destruição de locais ou objetos históricos.',
        localAdoracao: 'Cada monumento histórico que você encontrar e registrar servirá para recarga da bênção.'
    },
    {
        nome: 'Lórien (Irmo)',
        bencao: {
            nome: 'Sonhos de Lórien',
            descricao: 'Após um descanso longo, pergunte qualquer coisa ao mestre; ele será obrigado a revelar algo com até 60% de veracidade. O sonho também revelará o maior perigo no local.'
        },
        restricoes: 'Você deve ser Elfo. Não pode gerar intrigas, sofrimento ou angústia em seus compatriotas.',
        localAdoracao: 'Faça com suas mãos um local de descanso (pousada, jardim, casa) e ofereça aos outros.'
    },
    {
        nome: 'Estë',
        bencao: {
            nome: 'Cubra-me com tuas águas, Estë',
            descricao: 'Ao clamar e derramar água sobre suas feridas, você se regenera, curando 4d8 + Força de Vontade. Só funciona em ferimentos naturais e com água não corrompida.'
        },
        restricoes: 'Seja educado, ajude seus vizinhos e estranhos, limpe as estradas e não suje rios. Nunca falte com respeito a um Elfo.',
        localAdoracao: 'Deite-se próximo a um rio de água doce cercado de vida e agradeça.'
    },
    {
        nome: 'Tulkas',
        bencao: {
            nome: 'Super Força Titânica',
            descricao: 'Tulkas lhe empresta 50% de sua força para um único ataque em área. O dano usará todos os seus dados de dano, acrescentará um a mais e mudará todos para d100.'
        },
        restricoes: 'Jamais traia ou volte atrás em sua palavra. Nunca recuse um desafio. Seja o melhor anfitrião possível para qualquer hóspede, até mesmo prisioneiros.',
        localAdoracao: 'Arenas de gladiadores, ringues de luta, justas e festivais de força e competição.'
    },
    {
        nome: 'Nessa',
        bencao: {
            nome: 'Passos de Nessa',
            descricao: 'Movimente-se com rapidez e graciosidade. Qualquer teste de movimento a pé pode ser rolado com dupla vantagem e seu movimento é multiplicado pelo seu bônus de destreza +1.'
        },
        restricoes: 'Não maltrate animais. Servir à mesa de amigos, heróis e reis é um ato apreciado. Não manche a beleza dos campos verdes.',
        localAdoracao: 'Clareiras verdejantes onde cervos habitam.'
    },
    {
        nome: 'Ulmo',
        bencao: {
            nome: 'Fúria de Ulmo',
            descricao: 'Caso esteja em perigo, você pode assumir um avatar da água para lhe salvar dos seus inimigos; salvamento garantido, mas é necessário que haja oceano ou um rio próximo.'
        },
        restricoes: 'Nunca abandone seus amigos. Tenha um hobby só seu. Não cesse de trabalhar e não fique mais do que 2 dias sem exercer seu ofício (exceto se estiver ferido).',
        localAdoracao: 'Templo e margens de praias em frente ao oceano, em posse de uma ostra do mar para tocar e ouvir sua música.'
    },
    {
        nome: 'Nienna',
        bencao: {
            nome: 'Lamentos do Saber',
            descricao: 'Após atentar seus ouvidos, você ouvirá os lamentos de Nienna. Role uma vez qualquer teste de Sabedoria, Inteligência, Força de Vontade ou Carisma com dupla vantagem e retire 6 de qualquer dificuldade.'
        },
        restricoes: 'Sempre consolar alguém que está triste. Nunca zombar do luto de alguém. Sempre mostrar compaixão, mesmo com inimigos.',
        localAdoracao: 'Templos e ilhas do oeste (Himring, Tol Morwen e Tol Fuin).'
    },
    {
        nome: 'Melkor/Morgoth',
        bencao: {
            nome: 'Nenhuma Bênção',
            descricao: 'Morgoth está banido da existência e não pode conceder bênçãos a seus seguidores.'
        },
        restricoes: 'Odiar o sol e sua luz. Sempre tentar corromper, perverter ou destruir. Jamais ser leal a amigos ou parentes; só lealdade a Morgoth.',
        localAdoracao: 'Templos dos Númenorianos Negros e Pés da Montanha da Perdição em Mordor.'
    }
];

export const classes = [
    {
        nome: 'Bárbaro',
        subclasses: [
            {
                nome: 'Fúria Ancestral',
                tecnica: {
                    nome: 'Braço Longo',
                    descricao: 'Em posse de uma grande arma, pode atacar múltiplos inimigos de uma vez dependendo da altura deles.'
                },
                tradicao: {
                    nome: 'Ação Selvagem',
                    descricao: 'Role iniciativa com bônus de Força de Vontade. No primeiro round, você tem dois ataques.'
                },
                mauHabito: {
                    nome: 'Não Simpatizam com Anões',
                    descricao: 'Role Força de Vontade (dif 14) para simpatizar com anões.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Filhos Berserks',
                tecnica: {
                    nome: 'Golpe Bárbaro',
                    descricao: 'Com um porrete ou martelo, acerte a cabeça. A vítima pode sofrer penalidades em Sabedoria, Inteligência e precisão.'
                },
                tradicao: {
                    nome: 'Amantes dos Campos',
                    descricao: 'Ganhe +8 km por dia em biomas de floresta.'
                },
                mauHabito: {
                    nome: 'Burros',
                    descricao: 'Você é iletrado e ingênuo. Tenha desvantagem em testes de Inteligência ou Conhecimento.'
                },
                pratica: 'Escolha um ofício, mas ele não pode ser complexo.'
            },
            {
                nome: 'Ent-Fúria',
                tecnica: {
                    nome: 'Arma Improvisada',
                    descricao: 'Use um destroço como arma. Terá dano de soco +3 no dado, com bônus na precisão, mas pode quebrar.'
                },
                tradicao: {
                    nome: 'Pés Profundos',
                    descricao: 'Enraíze seus pés no chão e ganhe bônus de Constituição conforme o terreno.'
                },
                mauHabito: {
                    nome: 'Sono Profundo',
                    descricao: 'Gostam de dormir por longos períodos, o que pode atrasar o grupo se não for cumprido.'
                },
                pratica: 'Você não tem ofício— apenas cuida das árvores.'
            }
        ]
    },
    {
        nome: 'Caçador',
        subclasses: [
            {
                nome: 'Caçadores de Dragões',
                tecnica: {
                    nome: 'Tiro Profundo',
                    descricao: 'Usando um arco pesado dos homens, dispare uma flecha para criar um ponto fraco no inimigo. Acertar esse ponto dobra o número do seu dado de dano.'
                },
                tradicao: {
                    nome: 'Predador Comum',
                    descricao: 'Marque uma fonte de alimento para caçar e diminua em 3 a dificuldade de qualquer teste de caça.'
                },
                mauHabito: {
                    nome: 'Supersticiosos',
                    descricao: 'Você acredita demais em lendas e mitos. Acrescente +2 na dificuldade ou +2 em qualquer benefício/malefício de uma lenda ou mito.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Caçadores Élficos',
                tecnica: {
                    nome: 'Arco Élfico',
                    descricao: 'Usando Destreza em um arco leve, pode disparar até 1+LEVEL flechas por rodada, com penalidade cumulativa de -1 no acerto e -1 dado de precisão a cada disparo.'
                },
                tradicao: {
                    nome: 'Guerreiros Saltitantes',
                    descricao: 'Você pode escalar e saltar como se estivesse andando. Tenha o mesmo deslocamento escalando que andando e ganhe 15 km por dia extras em locais com apoio.'
                },
                mauHabito: {
                    nome: 'Sérios Demais',
                    descricao: 'Você não tem senso de humor e é péssimo em perceber sarcasmo. Role Inteligência (dif 14) para fingir que está no clima da graça.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Pequenos Caçadores',
                tecnica: {
                    nome: 'Olhos Precisos',
                    descricao: 'Seus olhos são atentos e não perdem nada. Tenha +1d4 no acerto e na percepção.'
                },
                tradicao: {
                    nome: 'Armadilhas',
                    descricao: 'Você pode criar armadilhas para prender criaturas se tiver recursos, com diferentes dificuldades para diferentes tamanhos de presas.'
                },
                mauHabito: {
                    nome: 'Mau Dia',
                    descricao: 'Você tem o hábito de pisar na bola no momento crucial. Role Força de Vontade (dif 11) para manter o foco em momentos importantes do grupo.'
                },
                pratica: 'Escolha um ofício.'
            }
        ]
    },
    {
        nome: 'Cavaleiro',
        subclasses: [
            {
                nome: 'Senhores dos Cavalos',
                tecnica: {
                    nome: 'Aprenderam a Cavalgar antes de Andar',
                    descricao: 'Sobre um cavalo, tenha uma ação de movimento e uma ação de ataque extra.'
                },
                tradicao: {
                    nome: 'Filhos de Fram',
                    descricao: 'Pegue distância e suma da visão do inimigo. O próximo ataque terá +4 de dano, +2 dados de precisão e +3 no acerto.'
                },
                mauHabito: {
                    nome: 'Tolos Arrogantes',
                    descricao: 'Rohirrim são muito orgulhosos e preferem morrer a pedir ajuda. Role Força de Vontade (dif 16) para conseguir pedir ajuda a alguém.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Pés de Ferro',
                tecnica: {
                    nome: 'Cabeças Duras',
                    descricao: 'Sua cabeçada causa dano aumentado com base na sua Força. Mesmo que o alvo defenda com Constituição, ele toma metade do dano.'
                },
                tradicao: {
                    nome: 'Giro Descuidado',
                    descricao: 'Quando cercado por 3 ou mais inimigos, gaste uma ação completa para realizar um ataque giratório. Inimigos devem passar em um teste de Destreza para não serem atingidos.'
                },
                mauHabito: {
                    nome: 'Não é de ferro?',
                    descricao: 'Você não confia em nada que não seja de ferro ou aço, insistindo em usar e pagar mais por esses materiais. Role Força de Vontade (dif 18) para ser convencido do contrário.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Cavaleiros das Marés',
                tecnica: {
                    nome: 'Passo Fluído',
                    descricao: 'Você anda normalmente em terrenos fluidos e movediços (como barcos). Diminua em 3 os testes de resistência ou equilíbrio nesses ambientes.'
                },
                tradicao: {
                    nome: 'Empunhadura Dupla',
                    descricao: 'Use duas espadas e receba um ataque extra. Seu primeiro ataque terá -3 de precisão, e o segundo é normal.'
                },
                mauHabito: {
                    nome: 'Antipatia a Outros Povos',
                    descricao: 'Com exceção de Elfos e moradores de Lhûn, você não se importa com a causa de outros povos. Role Força de Vontade (dif 14) para simpatizar.'
                },
                pratica: 'Escolha um ofício.'
            }
        ]
    },
    {
        nome: 'Ladrão',
        subclasses: [
            {
                nome: 'Línguas Trapaceiras',
                tecnica: {
                    nome: 'Mãos Mágicas',
                    descricao: 'Faça coisas desaparecerem diante dos olhos das pessoas com um teste de Carisma contra a Sabedoria delas, modificado pela sua Destreza e a Inteligência do alvo.'
                },
                tradicao: {
                    nome: 'Amigos Distantes',
                    descricao: 'Use seus contatos e informantes para obter informações ou oportunidades de dinheiro, com penalidades se estiver fora de sua região de origem.'
                },
                mauHabito: {
                    nome: 'Cobiçosos',
                    descricao: 'Você sempre quer mais do que já tem. Role Força de Vontade (dif 11) para não abusar da sorte.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Pequenos Sorrateiros',
                tecnica: {
                    nome: 'Mãos Pequenas',
                    descricao: 'Armas pequenas como adagas ou punhais têm seu dado de dano aumentado em 1 e ganham 2 dados de precisão extras.'
                },
                tradicao: {
                    nome: 'Mais do que se Vê',
                    descricao: 'Uma vez a cada 4 dias, você pode rolar um dado de ataque com vantagem e +4 dados de precisão, ou realizar uma ação com dupla vantagem.'
                },
                mauHabito: {
                    nome: 'Bons Anfitriões',
                    descricao: 'Você é extremamente bem-educado e se torna refém de qualquer visita que aparecer em sua casa, sendo obrigado a deixá-la entrar.'
                },
                pratica: 'Escolha um ofício — inclusive, seu ofício será um sobrenome extra além do seu.'
            }
        ]
    },
    {
        nome: 'Paladino',
        subclasses: [
            {
                nome: 'Sangue dos Imortais',
                tecnica: {
                    nome: 'Defesa Circular',
                    descricao: 'Com lança ou espada longa, ao defender um ataque corpo a corpo, você pode contra-atacar automaticamente com -5 no acerto.'
                },
                tradicao: {
                    nome: 'Relíquia Viva',
                    descricao: 'Diminua em 6 a dificuldade de qualquer teste de conhecimento sobre um inimigo à sua escolha. Aprenda uma língua extra.'
                },
                mauHabito: {
                    nome: 'Amor Possessivo',
                    descricao: 'Protetores ferozes do que amam. Ganhe +2 dados de precisão se ameaçarem o que você ama. Role Força de Vontade (dif 14) para conseguir abandonar ou deixar para trás.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Filhos de Númenor',
                tecnica: {
                    nome: 'Escudo Gondoriano',
                    descricao: 'Golpeie com seu escudo. Se o acerto ultrapassar a CON + bônus de Força de Vontade do oponente, você ganha um segundo ataque garantido.'
                },
                tradicao: {
                    nome: 'Chama de Gondor',
                    descricao: 'Brade para inspirar seus aliados. Role Força de Vontade (dif 16). Se passar, aliados ganham +2 em ações e seus dados de dano aumentam por 3 rodadas. Custo: 4 de mana.'
                },
                mauHabito: {
                    nome: 'Soberbos',
                    descricao: 'Têm orgulho extremo de sua nacionalidade. Role Força de Vontade (dif 14) sempre que sentirem que sua cidade foi desrespeitada.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Paladinos Errantes',
                tecnica: {
                    nome: 'Arma Única',
                    descricao: 'Com uma arma longa e apenas ela, você pode aparar ataques. Se defender, o inimigo perde a ação de movimento e a extra.'
                },
                tradicao: {
                    nome: 'Defensor Errante',
                    descricao: 'Gaste 3 de mana para perceber a malícia nos corações. Role Sabedoria contra a Força de Vontade dos inimigos para descobrir intenções malignas.'
                },
                mauHabito: {
                    nome: 'Insubordináveis',
                    descricao: 'Respeitam apenas seu Capitão. Role Força de Vontade (dif 14) para obedecer ordens de quem não seja o Capitão.'
                },
                pratica: 'Sendo um viajante, você precisa de um ofício para sobreviver.'
            }
        ]
    },
    {
        nome: 'Sábio',
        subclasses: [
            {
                nome: 'Sabedoria dos Homens',
                tecnica: {
                    nome: 'Pequenas Pedras',
                    descricao: 'Você é capaz de lapidar pedras e fazer com que elas realizem pequenos truques mágicos.'
                },
                tradicao: {
                    nome: 'Artesão de Belfalas',
                    descricao: 'Seu nome garante trabalho bem-feito. Ganhe +20% de dinheiro em vendas com outros homens e +10% com elfos.'
                },
                mauHabito: {
                    nome: 'Atenção de Passarinho',
                    descricao: 'Você está sempre "voando" e desatento. Só se concentra em sua arte e trabalho.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Sabedoria Drúedain',
                tecnica: {
                    nome: 'Emoções Verdadeiras',
                    descricao: 'Suas emoções são genuínas a ponto de contagiar as pessoas ao redor (rir, enraivecer, chorar).'
                },
                tradicao: {
                    nome: 'Estátua de Carne',
                    descricao: 'Você consegue ficar imóvel como uma estátua por um dia e uma noite sem piscar.'
                },
                mauHabito: {
                    nome: 'Muito Feios',
                    descricao: 'Sua aparência os torna isolados e pouco sociais, muitas vezes confundidos com orcs.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Sábios das Neves',
                tecnica: {
                    nome: 'Entalhes Ferozes',
                    descricao: 'Crie armas serrilhadas que dão dano extra, mas podem prender no ambiente.'
                },
                tradicao: {
                    nome: 'Línguas Estranhas',
                    descricao: 'Sua voz se mistura com os ventos, confundindo inimigos e podendo causar medo.'
                },
                mauHabito: {
                    nome: 'Calorentos',
                    descricao: 'Acostumados ao frio, sofrem em regiões quentes, perdendo energia de viagem extra.'
                },
                pratica: 'Escolha um ofício adequado a povos esquimós.'
            },
            {
                nome: 'Sabedoria dos Pequenos Anões',
                tecnica: {
                    nome: 'Machado Pesado',
                    descricao: 'Após matar um inimigo com machado, gaste 2 de energia de viagem para atacar de novo com dano aumentado.'
                },
                tradicao: {
                    nome: 'Manipuladores de Metais',
                    descricao: 'Através da forja, desperte os poderes de metais como cobre, estanho, ferro, etc.'
                },
                mauHabito: {
                    nome: 'Bússolas Quebradas',
                    descricao: 'Péssimo senso de direção e geografia, mas você acredita que tem um ótimo senso.'
                },
                pratica: 'Escolha um ofício.'
            },
            {
                nome: 'Sabedoria dos Grandes Anões',
                tecnica: {
                    nome: 'Espadas Afiadas',
                    descricao: 'Qualquer lâmina feita por você tem um fio superior, acrescentando seu bônus de INT + NÍVEL como dano.'
                },
                tradicao: {
                    nome: 'Manipuladores de Pedras Preciosas',
                    descricao: 'Crie objetos e potencialize capacidades usando pedras como diamante, rubi, safira, etc.'
                },
                mauHabito: {
                    nome: 'Sua Baleia Branca',
                    descricao: 'Você tem um sonho louco, como recriar um reino anão em Moria ou matar um dragão.'
                },
                pratica: 'Escolha um ofício digno de sua origem.'
            },
            {
                nome: 'Sabedoria dos Elfos',
                tecnica: {
                    nome: 'Arte de Ofício',
                    descricao: 'Escolha uma arte (tecelagem, música, etc.). Toda a magia que você criar será nesse sentido.'
                },
                tradicao: {
                    nome: 'Amor à Natureza',
                    descricao: 'Ame uma característica da natureza (paisagem, equilíbrio, etc.). Sua magia caminhará nessa direção.'
                },
                mauHabito: {
                    nome: 'Bloqueio',
                    descricao: 'Toda criação sua deve ser única e não pode ser recriada ou repetida.'
                },
                pratica: 'Tenha o mesmo trabalho da sua técnica e ganhe +26% de dinheiro por ser um artesão élfico.'
            }
        ]
    }
];

export const oficios = [
    { nome: 'Aprendiz', descricao: '+2 na barra de força de vontade; rode 2d6 xelins por diária.' },
    { nome: 'Sentinela', descricao: 'Use 1/2 do bônus de inteligência extra em testes de vigilância; d4 penny diária.' },
    { nome: 'Adivinho', descricao: '+2 em testes de conhecimento sobre assuntos elevados; d4 penny diária.' },
    { nome: 'Dançarina', descricao: 'Use 1/2 do bônus de destreza adicional em testes de carisma ao dançar; 2d4 xelins diária.' },
    { nome: 'Bardo', descricao: '+2 em teste de conhecimento histórico; 2d4 xelins diária.' },
    { nome: 'Vendedor ambulante', descricao: 'Reduza o preço ou aumente em até 1 penny por level; d4 penny diária.' },
    { nome: 'Barqueiro', descricao: 'Diminua em 3 a dificuldade de navegação marítima; 2d6 penny diária.' },
    { nome: 'Curandeiro', descricao: 'Capaz de procurar folhas e ervas e preparar remédios; 2d4+1 penny diária.' },
    { nome: 'Apicultor', descricao: 'Coleta mel sem risco; 2d6 penny diária.' },
    { nome: 'Lenhador', descricao: '+1 dado de precisão ao atacar inimigos grandes, odiado por Ents; 2d6 penny diária.' },
    { nome: 'Carvoeiro', descricao: 'Produz carvão e fogo; regeneração de 1 de energia para você e um aliado; 2d6 penny diária.' },
    { nome: 'Pescador', descricao: 'Consiga 2 dias adicionais de alimento com animais marítimos; d4+1 penny diária.' },
    { nome: 'Caçador', descricao: 'Consiga 2 dias adicionais de alimento com animais terrestres; d4+1 penny diária.' },
    { nome: 'Pastor', descricao: '+1 em testes de carisma com animais dóceis; d6 penny diária.' },
    { nome: 'Fazendeiro', descricao: '+3 na barra de energia; d4 penny diária.' },
    { nome: 'Soldado Profissional', descricao: 'Receba desconto de 5% em tudo no seu reino; 2d4 penny diária.' },
    { nome: 'Arqueiro Profissional', descricao: 'Ao comprar flechas, acrescente 2 extras gratuitamente; 2d4 penny diária.' },
    { nome: 'Escriba', descricao: 'Aprenda uma língua extra; 2d4+1 penny diária.' },
    { nome: 'Escultor', descricao: 'Use 1/2 do bônus de carisma em testes de esculpir; 2d8 penny diária.' },
    { nome: 'Vidreiro', descricao: 'Conhecedor de reflexos; truque de carisma para distrair inimigos; 2d8 penny diária.' },
    { nome: 'Oleiro', descricao: 'Potes conservam alimentos por 3 dias extras; 2d8 penny diária.' },
    { nome: 'Curtidor', descricao: 'Peles feitas reduzem em 2 a dificuldade de resistência ao clima; 2d6+2 penny diária.' },
    { nome: 'Sapateiro', descricao: 'Botas feitas regeneram 1 de energia de viagem; d10+2 penny diária.' },
    { nome: 'Bordadeira de corte', descricao: 'Roupas aumentam +2 em testes de carisma; 2d10 penny diária.' },
    { nome: 'Tintureiro', descricao: 'Produz tinta de natureza; 2d6 penny diária.' },
    { nome: 'Tecelão', descricao: 'Produz tecidos finos ou grossos; d10 penny diária.' },
    { nome: 'Alfaiate', descricao: 'Roupas confortáveis regeneram 1 de energia de viagem; 2d6+3 penny diária.' },
    { nome: 'Mercenário', descricao: 'Recebe dinheiro para matar, roubar ou saquear; metade do ganho como extra; 2d8+d4 penny diária.' },
    { nome: 'Soldado Cavaleiro', descricao: 'Errante; regenere 1 extra em descanso curto; 2d8+d4 penny diária.' },
    { nome: 'Pedreiro', descricao: 'Reduz 3 dificuldade de analisar muros/casas; +3 na dificuldade de destruir suas próprias pedras; 2d8 penny diária.' },
    { nome: 'Carpinteiro', descricao: 'Reduz em 2 a dificuldade de construir cabanas e montar acampamento; 2d8+2 penny diária.' },
    { nome: 'Ferreiro', descricao: 'Reduz em 1,5 os recursos necessários na forja; 2d10+2 penny diária.' },
    { nome: 'Construtor naval', descricao: 'Barcos feitos por você se movem +5 km; 2d12+4 penny diária.' },
    { nome: 'Taberneiro', descricao: '+3 em conhecimento, contatos e informantes (apenas em uma região); 2d10-2 penny diária.' },
    { nome: 'Vinicultor', descricao: 'Vinhos dão d8 de mana extra temporária; 2d8 penny diária.' },
    { nome: 'Hidromeleiro', descricao: 'Hidromel dá d4 de força de vontade extra temporária; 2d8+2 penny diária.' },
    { nome: 'Cervejeiro', descricao: 'Cerveja dá d8 de HP temporário; 2d8 penny diária.' },
    { nome: 'Moedeiro', descricao: 'Reduz 8% em câmbio cultural; moedas podem valer 3% a mais; 2d12 penny diária.' },
    { nome: 'Joalheiro', descricao: 'Lapida joias; retém até 9g extras do peso original; 2d12+1 penny diária.' },
    { nome: 'Ourives', descricao: 'Desconto de 4% no material de metais; d14+3 penny diária.' },
    { nome: 'Explorador', descricao: 'Escolha um terreno habitual; desloque-se +6 km; 2d10+d8 penny diária.' },
    { nome: 'Contrabandista', descricao: 'Escolha uma região; planeje rotas; corte até d4+LEVEL dias de viagem; 3d12 penny diária.' },
    { nome: 'Cozinheiro', descricao: 'Comidas restauram +2 energia se tiver ingredientes; d6 penny diária.' }
];