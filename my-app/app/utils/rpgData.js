// app/utils/rpgData.js

export const races = [
    {
        nome: 'Anão',
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
        nome: 'Elfo',
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
        nome: 'Ent',
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
        nome: 'Hobbit',
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
        nome: 'Humano',
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
        nome: 'Troca-pele',
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