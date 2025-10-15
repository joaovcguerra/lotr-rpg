'use client'; // Adicione esta linha no topo para usar o State do React

import { useState, useMemo } from 'react'; // Importe o useState e useMemo
import styles from './Ficha.module.css';

// Função para calcular o modificador baseado na tabela
const getModifier = (value) => {
    const num = parseInt(value, 10);
    if (isNaN(num)) return '...';
    if (num <= 1) return -5;
    if (num <= 3) return -4;
    if (num <= 5) return -3;
    if (num <= 7) return -2;
    if (num <= 9) return -1;
    if (num <= 11) return 0;
    if (num <= 13) return '+1';
    if (num <= 15) return '+2';
    if (num <= 17) return '+3';
    if (num <= 19) return '+4';
    if (num <= 21) return '+5';
    if (num <= 23) return '+6';
    if (num <= 25) return '+7';
    if (num <= 27) return '+8';
    if (num <= 29) return '+9';
    return '+10';
};

export default function Ficha() {
    // Estado para armazenar os valores dos atributos
    const [atributos, setAtributos] = useState({
        forca: '10',
        destreza: '10',
        constituicao: '10',
        inteligencia: '10',
        sabedoria: '10',
        carisma: '10',
    });

    // Função para atualizar o estado quando um atributo mudar
    const handleAtributoChange = (e) => {
        const { name, value } = e.target;
        setAtributos(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Calcula a Força de Vontade automaticamente
    const forcaDeVontade = useMemo(() => {
        const con = parseInt(atributos.constituicao, 10) || 0;
        const car = parseInt(atributos.carisma, 10) || 0;
        return Math.floor((con + car) / 2);
    }, [atributos.constituicao, atributos.carisma]);


    return (
        <div className={styles.fichaGridContainer}>
            {/* Coluna da Esquerda: Informações, Status e Atributos */}
            <div className={styles.column}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Informações Gerais</h2>
                    {/* ... (código anterior da seção de informações gerais) ... */}
                    <div className={styles.infoGeral}>
                        <div className={styles.profilePic}></div>
                        <button className={styles.buttonSmall}>Mudar foto</button>
                        <button className={styles.buttonSmall}>Mudar moldura</button>
                    </div>
                    <div className={styles.field}> <label>Nome:</label> <input type="text" placeholder="Oberon" /> </div>
                    <div className={styles.field}> <label>Raça:</label> <input type="text" /> </div>
                    <div className={styles.field}> <label>Classe:</label> <input type="text" /> </div>
                    <div className={styles.field}> <label>Caminho:</label> <input type="text" /> </div>
                </div>

                {/**************** Seção de Atributos ATUALIZADA ****************/}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Atributos</h2>
                    <div className={styles.atributosGrid}>
                        {/* Mapeia o objeto de atributos para criar cada caixa */}
                        {Object.keys(atributos).map((attrName) => (
                            <div key={attrName} className={styles.atributoBox}>
                                <label className={styles.atributoLabel}>{attrName.toUpperCase()}</label>
                                <input
                                    type="number"
                                    name={attrName}
                                    value={atributos[attrName]}
                                    onChange={handleAtributoChange}
                                    className={styles.atributoInput}
                                />
                                <div className={styles.atributoModificador}>
                                    {getModifier(atributos[attrName])}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.atributoBox} style={{ marginTop: '1.5rem' }}>
                        <label className={styles.atributoLabel}>FORÇA DE VONTADE</label>
                        <input
                            type="number"
                            value={forcaDeVontade}
                            className={styles.atributoInput}
                            disabled
                        />
                        <div className={styles.atributoModificador}>
                            {getModifier(forcaDeVontade)}
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Status</h2>
                    {/* ... (código anterior da seção de status) ... */}
                    <div className={styles.statusDisplay}>
                        <p><strong>HP:</strong> XdX</p> <p><strong>MANA:</strong> XdX</p>
                        <p><strong>Energia de Jornada:</strong> Y</p> <p><strong>Barra de Vontade:</strong> Z</p>
                        <p><strong>Level:</strong> 1</p> <p><strong>Deslocamento:</strong> X</p>
                    </div>
                </div>
            </div>

            {/* Coluna do Meio: Habilidades e Inventário */}
            <div className={styles.column}>
                {/* ... (código anterior da coluna do meio) ... */}
                <div className={styles.section}> <h2 className={styles.sectionTitle}>Habilidades de Raça</h2> <div className={styles.ability}> <strong>Talento:</strong> Leveza Élfica </div> <div className={styles.ability}> <strong>Mau Hábito:</strong> Desgosto por Anões </div> </div>
                <div className={styles.section}> <h2 className={styles.sectionTitle}>Habilidades de Classe</h2> <div className={styles.ability}> <strong>Técnica:</strong> Tiro Profundo </div> <div className={styles.ability}> <strong>Tradição:</strong> Predador Comum </div> </div>
                <div className={styles.section}> <h2 className={styles.sectionTitle}>Benção dos Valar</h2> <div className={styles.ability}> <strong>Valar:</strong> Manwë </div> <div className={styles.ability}> <strong>Benção:</strong> Águias Gigantes </div> </div>
                <div className={styles.section}> <h2 className={styles.sectionTitle}>Inventário</h2> <p>Peso: 0 / X</p> <div className={styles.item}> <p><strong>Nome:</strong> Item Exemplo</p> <p><strong>Descrição:</strong> Um item para demonstrar a estrutura.</p> <p><strong>Peso:</strong> 1 | <strong>Bônus:</strong> Nenhum</p> </div> <button className={styles.button}>Adicionar Item</button> </div>
            </div>

            {/* Coluna da Direita: Rolador de Dados */}
            <div className={styles.column}>
                {/* ... (código anterior da coluna da direita) ... */}
                <div className={`${styles.section} ${styles.diceRollerSection}`}>
                    <h2 className={styles.sectionTitle}>Dados</h2>
                    <div className={styles.diceGrid}>
                        <div className={styles.dicePlaceholder}>D20</div> <div className={styles.dicePlaceholder}>D100</div>
                        <div className={styles.dicePlaceholder}>D12</div> <div className={styles.dicePlaceholder}>D10</div>
                        <div className={styles.dicePlaceholder}>D8</div> <div className={styles.dicePlaceholder}>D6</div>
                        <div className={styles.dicePlaceholder}>D4</div> <div className={styles.dicePlaceholder}>D2</div>
                    </div>
                    <div className={styles.diceResult}> <p>Resultado aparecerá aqui</p> </div>
                </div>
            </div>
        </div>
    );
}