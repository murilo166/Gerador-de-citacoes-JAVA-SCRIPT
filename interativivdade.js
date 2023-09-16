let citacao = document.querySelector(".texto");

console.log(citacao);



let autor = document.querySelector(".autor");

console.log(autor);




let botao = document.querySelector(".umbtn");

console.log(botao);




let div = document.querySelector(".organizacitacoes");

console.log(div);


            let citacoes = [
            {
                "text": "O gênio é um por cento de inspiração e noventa e nove por cento de transpiração.",
                "autor": "Thomas Edison"
            },
            {
                "text": "Você pode observar muito apenas observando.",
                "autor": "Yogi Berra"
            },
            {
                "text": "Uma casa dividida contra si mesma não pode subsistir.",
                "autor": "Abraham Lincoln"
            },
            {
                "text": "As dificuldades aumentam à medida que nos aproximamos da meta.",
                "autor": "Johann Wolfgang von Goethe"
            },
            {
                "text": "O destino está em suas mãos e de mais ninguém",
                "autor": "Byron Pulsifer"
            },
            {
                "text": "Seja o chefe, mas nunca o senhor.",
                "autor": "Lao Tzu"
            },
            {
                "text": "Nada acontece a menos que primeiro sonhemos.",
                "autor": "Carl Sandburg"
            },
            {
                "text": "Bem começado está meio feito.",
                "autor": "Aristóteles"
            },
            {
                "text": "A vida é uma experiência de aprendizado, somente se você aprender.",
                "autor": "Yogi Berra"
            },
            {
                "text": "A autocomplacência é fatal para o progresso.",
                "autor": "Margaret Sangster"
            },
            {
                "text": "A paz vem de dentro. Não a busque fora.",
                "autor": "Buda"
            },
            {
                "text": "O que você dá é o que você recebe.",
                "autor": "Byron Pulsifer"
            },
            {
                "text": "Só podemos aprender a amar amando.",
                "autor": "Íris Murdoch"
            },
            {
                "text": "A vida é mudança. O crescimento é opcional. Escolha sabiamente.",
                "autor": "Karen Clark"
            },
            {
                "text": "Você verá quando acreditar.",
                "autor": "Wayne Dyer"
            },
            {
                "text": "Hoje é o amanhã com o qual nos preocupamos ontem.",
                "autor": null
            },
            {
                "text": "É mais fácil ver os erros no papel de outra pessoa.",
                "autor": null
            },
            {
                "text": "Todo homem morre. Nem todo homem realmente vive.",
                "autor": null
            },
            {
                "text": "Para liderar as pessoas, caminhe atrás delas.",
                "autor": "Lao Tzu"
            },
            {
                "text": "Não tendo nada, nada pode perder.",
                "autor": "William Shakespeare"
            },
            {
                "text": "Problemas são apenas oportunidades em roupas de trabalho.",
                "autor": "Henry J. Kaiser"
            },
            {
                "text": "Uma pedra que rola não cria musgo.",
                "autor": "Publilius Syrus"
            },
            {
                "text": "As ideias são os pontos iniciais de todas as fortunas.",
                "autor": "Napoleon Hill"
            },
            {
                "text": "Tudo na vida é sorte.",
                "autor": "Donald Trump"
            },
            {
                "text": "Não fazer nada é melhor do que estar ocupado sem fazer nada.",
                "autor": "Lao Tzu"
            },
            {
                "text": "Confie em si mesmo. Você sabe mais do que pensa.",
                "autor": "Benjamin Spock"
            },
            {
                "text": "Estude o passado, se quiser adivinhar o futuro.",
                "autor": "Confúcio"
            },
            {
                "text": "O dia já está abençoado, encontre paz nele.",
                "autor": null
            },
            {
                "text": "De erro em erro descobre-se toda a verdade.",
                "autor": "Sigmund Freud"
            },
            {
                "text": "Bem feito é melhor do que bem dito.",
                "autor": "Benjamin Franklin"
            },
            {
                "text": "Morda mais do que você pode mastigar, então mastigue.",
                "autor": "Ella Williams"
            },
            {
                "text": "Trabalhe sua própria salvação. Não dependa dos outros.",
                "autor": "Buda"
            },
            {
                "text": "Um hoje vale dois amanhãs.",
                "autor": "Benjamin Franklin"
            },
            {
                "text": "Depois de escolher a esperança, tudo é possível.",
                "autor": "Christopher Reeve"
            },
            {
                "text": "Deus sempre escolhe o caminho mais simples.",
                "autor": "Albert Einstein"
            },
            {
                "text": "Um falha em direção ao sucesso.",
                "autor": "Charles Kettering"
            },
            {
                "text": "De pequenos começos vêm grandes coisas.",
                "autor": null
            },
            {
                "text": "O aprendizado é um tesouro que seguirá seu dono por toda parte",
                "autor": "provérbio chinês"
            },
            {
                "text": "Seja como você deseja parecer.",
                "autor": "Sócrates"
            },
            {
                "text": "O mundo está sempre em movimento.",
                "autor": "V. Naipaul"
            },
            {
                "text": "Nunca confunda atividade com realização.",
                "autor": "John Wooden"
            },
            {
                "text": "O que te preocupa te domina.",
                "autor": "Haddon Robinson"
            },
            {
                "text": "Enfrenta-se o futuro com o passado.",
                "autor": "Pearl Buck"
            },
            {
                "text": "As metas são o combustível na fornalha da conquista.",
                "autor": "Brian Tracy"
            },
            {
                "text": "Quem semeia virtude colhe honra.",
                "autor": "Leonardo da Vinci"
            },
            {
                "text": "Seja gentil sempre que possível. Sempre é possível.",
                "autor": "Dalai Lama"
            },
            {
                "text": "Falar não cozinha arroz.",
                "autor": "provérbio chinês"
            },
            {
                "text": "É capaz quem pensa que é capaz.",
                "autor": "Buda"
            },
            {
                "text": "Uma meta sem um plano é apenas um desejo.",
                "autor": "Larry Elder"
            },
            {
                "text": "Para ter sucesso, devemos primeiro acreditar que podemos.",
                "autor": "Michael Korda"
            },
            {
                "text": "Aprenda com o ontem, viva o hoje, espere pelo amanhã.",
                "autor": "Albert Einstein"
            },
            {
                "text": "Uma erva daninha não passa de uma flor disfarçada.",
                "autor": "James Lowell"
            },
            {
                "text": "Faça ou não faça. Não há tentativa.",
                "autor": "Yoda"
            },
            {
                "text": "Toda ousadia séria começa de dentro.",
                "autor": "Harriet Beecher Stowe"
            },
            {
                "text": "O melhor professor é a experiência aprendida com os fracassos.",
                "autor": "Byron Pulsifer"
            },
            {
                "text": "Pense em como a física seria difícil se as partículas pudessem pensar.",
                "autor": "Murray Gell-Mann"
            },
            {
                "text": "O amor é a flor que você tem que deixar crescer.",
                "autor": "John Lennon"
            },
            {
                "text": "Não espere. Nunca será a hora certa.",
                "autor": "Napoleon Hill"
            },
            {
                "text": "O tempo é o conselheiro mais sábio de todos.",
                "autor": "Péricles"
            },
            {
                "text": "Você dá antes de receber.",
                "autor": "Napoleon Hill"
            },
            {
                "text": "A sabedoria começa na maravilha.",
                "autor": "Sócrates"
            },
            {
                "text": "Sem coragem, a sabedoria não dá frutos.",
                "autor": "Baltasar Gracian"
            },
            {
                "text": "A mudança em todas as coisas é doce.",
                "autor": "Aristóteles"
            },
            {
                "text": "O que você teme é aquilo que requer ação para superar.",
                "autor": "Byron Pulsifer"
            },
            {
                "text": "Quando o desempenho excede a ambição, a sobreposição é chamada de sucesso.",
                "autor": "Cullen Hightower"
            },
            {
                "text": "Quando as ações falam, as palavras não são nada.",
                "autor": "provérbio africano"
            },
            {
                "text": "A verdadeira magia nos relacionamentos significa a ausência de julgamento dos outros.",
                "autor": "Wayne Dyer"
            },
            {
                "text": "Eu nunca penso no futuro. Ele chega em breve.",
                "autor": "Albert Einstein"
            },
            {
                "text": "Habilidade para fazer vem de fazer.",
                "autor": "Ralph Emerson"
            },
            {
                "text": "A sabedoria é a parte suprema da felicidade.",
                "autor": "Sófocles"
            },
            {
                "text": "Acredito que toda pessoa nasce com talento.",
                "autor": "Maya Angelou"
            },
            {
                "text": "Princípios importantes podem e devem ser inflexíveis.",
                "autor": "Abraham Lincoln"
            },
            {
                "text": "A realização de uma nova ação traz uma nova força.",
                "autor": "Richard Evans"
            },
            {
                "text": "Os anos ensinam muito que os dias nunca sabem.",
                "autor": "Ralph Emerson"
            },
            {
                "text": "Nossa desconfiança é muito cara.",
                "autor": "Ralph Emerson"
            },
            {
                "text": "Todos conhecem o caminho; poucos realmente o percorrem.",
                "autor": "Bodhidharma"
            },
            {
                "text": "Grande talento encontra felicidade na execução.",
                "autor": "Johann Wolfgang von Goethe"
            },
            {
                "text": "A fé em si mesmo é o melhor e mais seguro caminho.",
                "autor": "Michelangelo"
            },
            {
                "text": "Coragem é ir de fracasso em fracasso sem perder o entusiasmo.",
                "autor": "Winston Churchill"
            },
            {
                "text": "Os dois guerreiros mais poderosos são a paciência e o tempo.",
                "autor": "Leo Tolstoi"
            },
            {
                "text": "Antecipe o difícil gerenciando o fácil.",
                "autor": "Lao Tzu"
            },
            {
                "text": "Aqueles que estão livres de pensamentos ressentidos certamente encontrarão a paz.",
                "autor": "Buda"
            },
            {
                "text": "Um ditado curto geralmente contém muita sabedoria.",
                "autor": "Sófocles"
            },
            {
                "text": "É preciso sol e chuva para fazer um arco-íris.",
                "autor": null
            },
            {
                "text": "Uma coisa bonita nunca é perfeita.",
                "autor": null
            },
            {
                "text": "Só faça o que seu coração mandar.",
                "autor": "Princesa Diana"
            },
            {
                "text": "A vida é movimento - nós respiramos, comemos, andamos, nos movemos!",
                "autor": "John Pierrakos"
            },
            {
                "text": "Ninguém pode fazer você se sentir inferior sem o seu consentimento.",
                "autor": "Eleanor Roosevelt"
            },
            {
                "text": "Argumente sobre suas limitações e com certeza elas são suas.",
                "autor": "Richard Bach"
            },
            {
                "text": "Sorte é o que acontece quando a preparação encontra a oportunidade.",
                "autor": "Sêneca"
            },
            {
                "text": "A vitória pertence ao mais perseverante.",
                "autor": "Napoleão Bonaparte"
            },
            {
                "text": "Ame a todos, confie em poucos, não faça mal a ninguém.",
                "autor": "William Shakespeare"
            },
            {
                "text": "Para vencer, você deve esperar vencer.",
                "autor": "Richard Bach"
            },
            {
                "text": "Uma meta é um sonho com prazo.",
                "autor": "Napoleon Hill"
            },
            {
                "text": "Você pode fazer isso se acreditar que pode!",
                "autor": "Napoleon Hill"
            },
            {
                "text": "Estabeleça metas altas e não pare até chegar lá.",
                "autor": "Bo Jackson"
            },
            {
                "text": "Cada novo dia é uma nova chance de mudar sua vida.",
                "autor": null
            },
            {
                "text": "Sorria, respire e vá devagar.",
                "autor": "Thich Nhat Hanh"
            },
            {
                "text": "Ninguém vai acreditar em você a menos que você acredite em si mesmo.",
                "autor": "Libertação"
            },
            {
                "text": "Faça mais do que sonhar: trabalhe.",
                "autor": "William Arthur Ward"
            },
            {
                "text": "Nenhum homem jamais foi sábio por acaso.",
                "autor": "Sêneca"
            },
            {
                "text": "Alguns buscam a felicidade, outros a criam.",
                "autor": null
            },
            {
                "text": "Aquele que é tonto pensa que o mundo gira.",
                "autor": "William Shakespeare"
            },
            {
                "text": "Não estrague o presente com o passado arruinado.",
                "autor": "Ellen Gilchrist"
            },
            {
                "text": "Faça algo maravilhoso, as pessoas podem imitá-lo.",
                "autor": "Albert Schweitzer"
            },
            {
                "text": "Fazemos o que fazemos porque acreditamos.",
                "autor": null
            },
            
]

            botao.addEventListener("click", function gerar(){


         



                let numeroaleatorio = Math.floor(Math.random()* citacoes.length);

                //MATH FLOOR() = SERVE COMO METODO PARA ARREDONDAR OS NUMEROS


                // MATH RANDOM() = SERVE PARA GERAR UM NUMERO ALEATORIO ENTRE 0 E 1

                citacao.innerHTML = citacoes[numeroaleatorio].text;

                autor.innerHTML = citacoes[numeroaleatorio].autor;

                if(citacoes[numeroaleatorio].autor==null){

                    autor.innerHTML = "Desconhecido";
                    
                }




            })