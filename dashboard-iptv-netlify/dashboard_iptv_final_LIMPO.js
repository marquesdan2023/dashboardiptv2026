
// ============================================================
// DADOS
// ============================================================
const CL_KEY = 'iptv_clientes_v1';
const DN_KEY = 'iptv_dns_v1';
const CP_KEY = 'iptv_compras_v1';
const PG_KEY = 'iptv_pagamentos_v1';
const BN_KEY = 'iptv_bonus_v1';
const SI_KEY = 'iptv_saldo_inicial_v1';
const CUSTO_CREDITO = 6.50;

// Créditos por plano
const PLANOS = {1: 1, 3: 2.5, 6: 5, 12: 10};
function creditosPorMeses(m) { return PLANOS[+m] || 1; }

const CL_SEED = [
  {cliente:"Ronaldo Castelli Pai",venc:"2026-05-25",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Patrícia Bastos",venc:"2026-05-25",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Darley",venc:"2026-05-25",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Du QIC Filha",venc:"2026-05-27",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Fagner",venc:"2026-05-29",valor:40,app:"Ultra Player",tec:"IPTV",obs:""},
  {cliente:"Ed",venc:"2026-06-01",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Sara",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Luciano Orlando",venc:"2026-06-10",valor:40,app:"Duplecast",tec:"IPTV",obs:""},
  {cliente:"Bianca",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Leonardo Premero",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Ivana",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Elvys Rick",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Alessandra",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Rosangela",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Rodrigo Evaristo",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Francisco",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Jean Maciel",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Ademilso",venc:"2026-06-10",valor:40,app:"Ultra Player",tec:"IPTV",obs:""},
  {cliente:"Magali",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Silvio",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Sueli Ponto 1",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Sueli Ponto 2",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Gabriel Coelho",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Val",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Paulo Albuquerque",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Irene",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Guilherme Veronese",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Bernardo",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Janaina",venc:"2026-06-10",valor:40,app:"Quick Player",tec:"IPTV",obs:""},
  {cliente:"Alexandre Ponto 2",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Thayna",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Maria Aparecida",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Minzon",venc:"2026-06-10",valor:0,app:"",tec:"IPTV",obs:"Pago até Janeiro de 2027"},
  {cliente:"Marcelo Motta Ponto 2",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Rose Moreno",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Leonardo Ponto 2",venc:"2026-06-10",valor:35,app:"IPTV Smarters",tec:"IPTV",obs:""},
  {cliente:"Leonardo Ponto 1",venc:"2026-06-10",valor:35,app:"IPTV Smarters",tec:"IPTV",obs:""},
  {cliente:"Leandro",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Reginaldo hbf",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Efigênia",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Natalia Ponto 3",venc:"2026-06-10",valor:100,app:"",tec:"IPTV",obs:""},
  {cliente:"Gabriel Garcia",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Alexandra",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Ana Claudia",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Lucas Augusto",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Larissa Serafim",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Alexandre Ponto 1",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Gabriela",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Natalia Smart STB",venc:"2026-06-10",valor:0,app:"Smart STB",tec:"IPTV",obs:""},
  {cliente:"Julio",venc:"2026-06-10",valor:40,app:"TVBOX",tec:"IPTV",obs:""},
  {cliente:"Carol Pires",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Diego",venc:"2026-06-10",valor:0,app:"Quick Player",tec:"IPTV",obs:""},
  {cliente:"Natalia Ultra Player",venc:"2026-06-10",valor:0,app:"Ultra Player",tec:"IPTV",obs:""},
  {cliente:"Marcelo Motta",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Caroline Pereira",venc:"2026-06-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Jéssica Aparecida",venc:"2026-06-11",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Anderson",venc:"2026-06-11",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Rafael",venc:"2026-06-13",valor:40,app:"Duplecast",tec:"IPTV",obs:""},
  {cliente:"Du QIC Ponto 2",venc:"2026-06-14",valor:40,app:"Ibo Player",tec:"IPTV",obs:""},
  {cliente:"Matheus Passos",venc:"2026-06-15",valor:40,app:"Smart STB",tec:"IPTV",obs:""},
  {cliente:"Gabriela RD",venc:"2026-06-15",valor:30,app:"",tec:"IPTV",obs:""},
  {cliente:"Maria Amalia",venc:"2026-06-15",valor:30,app:"",tec:"IPTV",obs:""},
  {cliente:"Giovani Mendes Ponto 2",venc:"2026-06-16",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Sonia",venc:"2026-06-20",valor:40,app:"Quick Player",tec:"IPTV",obs:""},
  {cliente:"Lucas Barreto",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Homero Ponto 1",venc:"2026-06-20",valor:35,app:"",tec:"IPTV",obs:""},
  {cliente:"Homero Ponto 2",venc:"2026-06-20",valor:35,app:"",tec:"IPTV",obs:""},
  {cliente:"Giovani Mendes Ponto 1",venc:"2026-06-20",valor:20,app:"",tec:"IPTV",obs:""},
  {cliente:"Cintia Ponto 1",venc:"2026-06-20",valor:35,app:"",tec:"IPTV",obs:""},
  {cliente:"Cintia Ponto 2",venc:"2026-06-20",valor:35,app:"Duplecast",tec:"IPTV",obs:""},
  {cliente:"Renato",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Fabio Pereira Ponto 2",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Camila Alves",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Igão",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Fefê",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Rebeka",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Rafael Cansian",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Isabelly",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Heudes",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Joana",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Rogério",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Danilo",venc:"2026-06-20",valor:0,app:"",tec:"IPTV",obs:""},
  {cliente:"Jéssica",venc:"2026-06-20",valor:40,app:"Duplecast",tec:"IPTV",obs:""},
  {cliente:"Gilvane",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Sidnei",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Reginaldo",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Marcelo",venc:"2026-06-20",valor:40,app:"Ultra Player",tec:"IPTV",obs:""},
  {cliente:"Janete",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Nando",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Tabata Lage",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Fabio Pereira Ponto 1",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Lucas Miranda Ponto 2",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Fernando Moreira",venc:"2026-06-20",valor:35,app:"",tec:"IPTV",obs:""},
  {cliente:"Jefferson Santos",venc:"2026-06-20",valor:35,app:"",tec:"IPTV",obs:""},
  {cliente:"Amanda Ellen",venc:"2026-06-21",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Kelven Lazer Play Ponto 2",venc:"2026-06-21",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Matheus Filho",venc:"2026-06-21",valor:0,app:"",tec:"IPTV",obs:""},
  {cliente:"Fernando Lourenço",venc:"2026-06-23",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Léo Igreja",venc:"2026-06-24",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Navarro",venc:"2026-06-24",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Caio Felipe",venc:"2026-06-25",valor:40,app:"SmartOne",tec:"IPTV",obs:""},
  {cliente:"Renan Camargo",venc:"2026-06-25",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Isabelly Celular",venc:"2026-06-25",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Gustavo Zeni",venc:"2026-06-26",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Kaio",venc:"2026-07-01",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Edgar",venc:"2026-07-08",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Kelven Ponto 1",venc:"2026-07-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Jacqueline",venc:"2026-07-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Osvaldo",venc:"2026-07-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Percival",venc:"2026-07-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Flavio",venc:"2026-07-12",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Victor",venc:"2026-07-13",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Edmilson",venc:"2026-07-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Viviane Castelli",venc:"2026-07-26",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Kelly Ponto 2",venc:"2026-08-01",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Kelly Ponto 1",venc:"2026-08-01",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Elaine",venc:"2026-08-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Gilberto",venc:"2026-08-17",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Wedson",venc:"2026-08-17",valor:40,app:"Quick Player",tec:"IPTV",obs:""},
  {cliente:"Ronaldo Castelli",venc:"2026-09-25",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Juan Santana",venc:"2026-10-10",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Carlos Lima",venc:"2026-10-18",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Cátia",venc:"2026-11-18",valor:40,app:"Quick Player",tec:"IPTV",obs:"Assinatura Quick Player até 7/4/2027"},
  {cliente:"Fernando Teixeira",venc:"2026-12-20",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"André",venc:"2027-04-22",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Vitão",venc:"2027-05-20",valor:40,app:"Duplex",tec:"IPTV",obs:""},
  {cliente:"Ronaldo Castelli Sogro",venc:"2026-09-25",valor:40,app:"",tec:"IPTV",obs:""},
  {cliente:"Lucas Miranda Ponto 1",venc:"2026-06-20",valor:40,app:"",tec:"IPTV",obs:""},
];

const DN_SEED = [
  {cliente:"Gilberto",app:"Quick Player",mac:"79735823792b",senha:"769901",venc:"",obs:""},
  {cliente:"Rogério",app:"Duplecast",mac:"d0c24e750930",senha:"1707264632",venc:"",obs:""},
  {cliente:"Sidnei",app:"Duplecast",mac:"f84e58b40641",senha:"1700962932",venc:"",obs:""},
  {cliente:"Vitão",app:"Duplex",mac:"15829457646c",senha:"1535477140",venc:"",obs:""},
  {cliente:"Navarro",app:"Bay iptv",mac:"68fcca28851c",senha:"NYRU46",venc:"",obs:""},
  {cliente:"Caio",app:"Smartone",mac:"bcc2d905a3c7",senha:"",venc:"",obs:""},
  {cliente:"Kaio",app:"Duplecast",mac:"20174275f0f8",senha:"1710012774",venc:"",obs:""},
  {cliente:"Jefferson Santos",app:"Smartone",mac:"b8b40973f343",senha:"",venc:"",obs:""},
  {cliente:"Gustavo Zeni",app:"Duplecast",mac:"58fdb1c7e40f",senha:"1703279801",venc:"",obs:""},
  {cliente:"Jessica",app:"Duplecast",mac:"1c869a7f9e4a",senha:"1676918947",venc:"",obs:""},
  {cliente:"Maria Aparecida",app:"Duplecast",mac:"fc039f74ca96",senha:"1679176586",venc:"",obs:""},
  {cliente:"Léo",app:"IBO",mac:"c8:a6:ef:7a:54:5e",senha:"329747",venc:"2026-10-22",obs:""},
  {cliente:"Du QIC",app:"Bay iptv",mac:"e47dbd17c49",senha:"",venc:"2027-04-27",obs:""},
  {cliente:"Du QIC",app:"Quick Player",mac:"1c869a80020b",senha:"28623",venc:"2027-02-13",obs:""},
  {cliente:"Cintia",app:"Duplecast",mac:"70:B1:3D:38:1A:38",senha:"1665541299",venc:"2026-10-24",obs:""},
  {cliente:"Francisco",app:"IBO",mac:"9C:8C:6E:8E:A0:60",senha:"210312",venc:"2027-02-27",obs:""},
  {cliente:"Carlos Lima",app:"",mac:"",senha:"",venc:"",obs:"Enviar novo DNS"},
];

// ============================================================
// STATE
// ============================================================
// Limpa chaves corrompidas de versões anteriores
['iptv_reset_v1','iptv_v3','iptv_ver_5'].forEach(k => localStorage.removeItem(k));

function loadOrSeed(key, seed) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return seed;
    const parsed = JSON.parse(raw);
    return (Array.isArray(parsed) && parsed.length > 0) ? parsed : seed;
  } catch(e) { return seed; }
}

let clientes = loadOrSeed(CL_KEY, CL_SEED);
let dnsLista = loadOrSeed(DN_KEY, DN_SEED);
let compras    = loadOrSeed(CP_KEY, []);
let pagamentos = loadOrSeed(PG_KEY, []);
let bonusList    = loadOrSeed(BN_KEY, []);
let saldoInicial = parseFloat(localStorage.getItem(SI_KEY)||'0');
let chartMes, chartValor;

// ============================================================
// UTILS
// ============================================================
const savePG = () => {
  localStorage.setItem(PG_KEY, JSON.stringify(pagamentos));
  fbSave('pagamentos', pagamentos);
};
const saveBN = () => {
  localStorage.setItem(BN_KEY, JSON.stringify(bonusList));
  fbSave('bonus', bonusList);
};
const saveC = () => {
  localStorage.setItem(CL_KEY, JSON.stringify(clientes));
  fbSave('clientes', clientes);
};
const saveD = () => {
  localStorage.setItem(DN_KEY, JSON.stringify(dnsLista));
  fbSave('dns', dnsLista);
};
const saveCP = () => {
  localStorage.setItem(CP_KEY, JSON.stringify(compras));
  fbSave('compras', compras);
};
const brl = n => 'R$ ' + (+n||0).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
const fmtDate = iso => { if(!iso) return '—'; const [y,m,d]=iso.split('-'); return `${d}/${m}/${y}`; };
const today = () => new Date().toISOString().slice(0,10);
const diffDays = iso => Math.round((new Date(iso+'T00:00:00') - new Date(today()+'T00:00:00')) / 86400000);
function getStatus(iso) {
  const dd = diffDays(iso);
  if (dd < 0) return {label:'Vencido', cls:'tag-vencido', key:'vencido'};
  if (dd === 0) return {label:'Hoje', cls:'tag-hoje', key:'hoje'};
  if (dd <= 7) return {label:`${dd}d`, cls:'tag-semana', key:'semana'};
  return {label:`${dd}d`, cls:'tag-ok', key:'futuro'};
}

function isoLocalDate(d) {
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

function addMonthsIso(iso, months) {
  const [y, m, d] = iso.split('-').map(Number);
  return isoLocalDate(new Date(y, m - 1 + months, d));
}

const PAINEL_VENCIMENTOS = [
  ['Luciano Kennupp','2026-06-10'], ['Bianca','2026-06-10'], ['Ivana','2026-06-10'], ['Magali','2026-06-10'],
  ['Gabriel Coelho','2026-06-10'], ['Guilherme Veronese','2026-06-10'], ['Bernardo','2026-06-10'], ['Reginaldo hbf','2026-06-10'],
  ['Natalia Ponto 3','2026-06-10'], ['Gabriel Garcia','2026-06-10'], ['Natalia Smart STB','2026-06-10'], ['Natalia Ultra Player','2026-06-10'],
  ['Jéssica Aparecida','2026-06-11'], ['Rafael Duplecast','2026-06-13'], ['Du QIC','2026-06-14'], ['Matheus Passos Smart STB','2026-06-15'],
  ['Gabriela RD','2026-06-15'], ['Maria Amalia','2026-06-15'], ['Giovani Mendes Ponto 2','2026-06-16'], ['Lucas Barreto','2026-06-20'],
  ['Homero','2026-06-20'], ['Homero 2','2026-06-20'], ['Giovani Mendes','2026-06-20'], ['Cintia Ponto 1','2026-06-20'],
  ['Cintia Ponto 2 Duplecast','2026-06-20'], ['Lucas HBF','2026-06-20'], ['Renato','2026-06-20'], ['Fabio Pereira Ponto 2','2026-06-20'],
  ['Camila Alves','2026-06-20'], ['Igão','2026-06-20'], ['Fefê','2026-06-20'], ['Rafael Cansian','2026-06-20'],
  ['Isabelly','2026-06-20'], ['Heudes','2026-06-20'], ['Joana','2026-06-20'], ['Rogerio','2026-06-20'],
  ['Danilo','2026-06-20'], ['Jessica Duplecast','2026-06-20'], ['Gilvane','2026-06-20'], ['Sidnei STB','2026-06-20'],
  ['Reginaldo','2026-06-20'], ['Marcelo','2026-06-20'], ['Janete Rogério','2026-06-20'], ['Nando','2026-06-20'],
  ['Tabata Lage','2026-06-20'], ['Fabio Pereira','2026-06-20'], ['Lucas Miranda 2','2026-06-20'], ['Fernando Moreira','2026-06-20'],
  ['Jefferson Santos','2026-06-20'], ['Amanda Ellen','2026-06-21'], ['Kelven Lazer Play Ponto 2','2026-06-21'], ['Matheus Filho','2026-06-21'],
  ['Fernando Lourenço','2026-06-23'], ['Leo Igreja','2026-06-24'], ['Navarro','2026-06-24'], ['Caio Felipe','2026-06-25'],
  ['Renan Camargo','2026-06-25'], ['Yhasmin Chaves','2026-06-25'], ['Patrícia Bastos','2026-06-25'], ['Isabely Celular','2026-06-25'],
  ['Gustavo Zeni','2026-06-26'], ['Darley','2026-06-26'], ['Ronaldo Castelli Sogro','2026-06-27'], ['Du QIC - Filha','2026-06-27'],
  ['Rafael Silva','2026-06-29'], ['Fagner','2026-06-29'], ['Kaio','2026-07-01'], ['Robson Bezerra','2026-07-01'],
  ['Edgar','2026-07-08'], ['Kelven Ponto 1','2026-07-10'], ['Sara','2026-07-10'], ['Luciano Orlando Duplecast','2026-07-10'],
  ['Leonardo Premero','2026-07-10'], ['Elvys Rick','2026-07-10'], ['Alessandra','2026-07-10'], ['Jacqueline','2026-07-10'],
  ['Rosângela','2026-07-10'], ['Rodrigo Evaristo Quick','2026-07-10'], ['Francisco','2026-07-10'], ['Jean Maciel','2026-07-10'],
  ['Osvaldo','2026-07-10'], ['Ademilso','2026-07-10'], ['Percival','2026-07-10'], ['Silvio','2026-07-10'],
  ['Sueli Ponto 2','2026-07-10'], ['Val','2026-07-10'], ['Paulo Albuquerque','2026-07-10'], ['Irene','2026-07-10'],
  ['Janaina Quick Player','2026-07-10'], ['Alexandre 2','2026-07-10'], ['Thayna','2026-07-10'], ['Maria Aparecida','2026-07-10'],
  ['Minzon','2026-07-10'], ['Vini Novigo ponto 2','2026-07-10'], ['Marcelo Motta Ponto 2','2026-07-10'], ['Rose Moreno','2026-07-10'],
  ['Leonardo IPTV Smarters 2','2026-07-10'], ['Leonardo IPTV Smarters 1','2026-07-10'], ['Leandro STB','2026-07-10'], ['Vini Novigo','2026-07-10'],
  ['Efigênia','2026-07-10'], ['Alexandra','2026-07-10'], ['Ana Claudia','2026-07-10'], ['Larissa Serafim','2026-07-10'],
  ['Alexandre','2026-07-10'], ['Gabriela','2026-07-10'], ['Julio TVBOX','2026-07-10'], ['Diego Silva Quick Player','2026-07-10'],
  ['Marcelo Motta','2026-07-10'], ['Sueli','2026-07-10'], ['Caroline Pereira','2026-07-10'], ['Flavio','2026-07-12'],
  ['Victor','2026-07-13'], ['Sonia Quick Player','2026-07-20'], ['Rebeka','2026-07-20'], ['Edmilson','2026-07-20'],
  ['Viviane Castelli','2026-07-26'], ['Kelly Ponto 2','2026-08-01'], ['Kelly Ponto 1','2026-08-01'], ['Elaine','2026-08-10'],
  ['Gilberto','2026-08-17'], ['Wedson Quick Player','2026-08-18'], ['Ed','2026-09-01'], ['Lucas Augusto','2026-09-10'],
  ['Carol Pires','2026-09-10'], ['Anderson','2026-09-11'], ['Ronaldo Castelli Quick','2026-09-25'], ['Juan Santana','2026-10-10'],
  ['Carlos Lima Web','2026-10-18'], ['Cátia','2026-11-18'], ['Fernando Teixeira Fire','2026-12-20'], ['André','2027-04-22'], ['Vitão','2027-05-20']
].map(([cliente, venc]) => ({cliente, venc}));

const ALIASES_PAINEL = {
  'homero': 'Homero Ponto 1',
  'homero 2': 'Homero Ponto 2',
  'cintia ponto 2 duplecast': 'Cintia Ponto 2',
  'jessica duplecast': 'Jéssica',
  'sidnei stb': 'Sidnei',
  'fabio pereira': 'Fabio Pereira Ponto 1',
  'lucas miranda 2': 'Lucas Miranda Ponto 2',
  'leo igreja': 'Léo Igreja',
  'isabely celular': 'Isabelly Celular',
  'kelven ponto 1': 'Kelven Ponto 1',
  'sonia quick player': 'Sonia',
  'kelly ponto 2': 'Kelly Ponto 2',
  'kelly ponto 1': 'Kelly Ponto 1',
  'wedson quick player': 'Wedson',
  'ronaldo castelli quick': 'Ronaldo Castelli',
  'carlos lima web': 'Carlos Lima',
  'fernando teixeira fire': 'Fernando Teixeira'
};

function nomeKey(nome) {
  return (nome || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function sincronizarVencimentosPainel() {
  let alterados = 0;
  let criados = 0;
  const porNome = new Map(clientes.map(c => [nomeKey(c.cliente), c]));

  PAINEL_VENCIMENTOS.forEach(item => {
    const nomeFinal = ALIASES_PAINEL[nomeKey(item.cliente)] || item.cliente;
    let cliente = porNome.get(nomeKey(nomeFinal)) || porNome.get(nomeKey(item.cliente));

    if (cliente) {
      if (cliente.venc !== item.venc) {
        cliente.venc = item.venc;
        alterados++;
      }
      return;
    }

    cliente = { cliente: nomeFinal, venc: item.venc, valor: 40, app: '', tec: 'IPTV', meses: 1, fone: '', obs: 'Importado do painel em 11/06/2026' };
    clientes.push(cliente);
    porNome.set(nomeKey(nomeFinal), cliente);
    criados++;
  });

  if (alterados || criados) saveC();
  return {alterados, criados};
}

function recomporPagamentosMesAtual() {
  const hoje = today();
  const inicio = hoje.slice(0, 8) + '01';
  let adicionados = 0;

  clientes.forEach(c => {
    if (!c.venc || !c.cliente) return;
    const meses = +(c.meses || 1);
    const dataRenovacao = addMonthsIso(c.venc, -meses);
    if (dataRenovacao < inicio || dataRenovacao > hoje) return;

    const nome = c.cliente.trim().toLowerCase();
    const jaExiste = pagamentos.some(p => {
      if (!p.data || !p.cliente) return false;
      const mesmoCliente = p.cliente.trim().toLowerCase() === nome;
      const noPeriodo = p.data >= inicio && p.data <= hoje;
      return mesmoCliente && noPeriodo;
    });
    if (jaExiste) return;

    pagamentos.push({
      data: dataRenovacao,
      cliente: c.cliente,
      valor: +c.valor || 0,
      meses,
      creditos: creditosPorMeses(meses),
      origem: 'recomposicao'
    });
    adicionados++;
  });

  if (adicionados > 0) savePG();
  return adicionados;
}

// ============================================================
// TABS
// ============================================================
function switchTab(name) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelector(`[onclick="switchTab('${name}')"]`).classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

function toggleForm(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

// ============================================================
// CLIENTES — KPIs + CHARTS
// ============================================================
function updateKPIs() {
  let vencidos=0, ativos=0, vV=0;
  clientes.forEach(c => {
    const dd = diffDays(c.venc);
    if(dd < 0){ vencidos++; vV += +c.valor||0; }
    else { ativos++; }
  });
  const _set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  _set('kpi-total', clientes.length);
  _set('kpi-ativos', ativos);
  _set('kpi-vencidos', vencidos);
  _set('kpi-vencidos-val', brl(vV));
}

function updateCharts() {
  if (!document.getElementById('chartMes')) return;
  const now = new Date(today()+'T00:00:00');
  const buckets = {};
  for(let i=0;i<6;i++){
    const d = new Date(now.getFullYear(), now.getMonth()+i, 1);
    buckets[d.toLocaleDateString('pt-BR',{month:'short',year:'2-digit'})] = 0;
  }
  clientes.forEach(c => {
    const key = new Date(c.venc+'T00:00:00').toLocaleDateString('pt-BR',{month:'short',year:'2-digit'});
    if(key in buckets) buckets[key]++;
  });
  if(chartMes) chartMes.destroy();
  chartMes = new Chart(document.getElementById('chartMes'), {
    type:'bar',
    data:{labels:Object.keys(buckets),datasets:[{label:'Clientes',data:Object.values(buckets),backgroundColor:'#3b82f6',borderRadius:6}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},
      scales:{x:{ticks:{color:'#94a3b8'},grid:{display:false}},y:{ticks:{color:'#94a3b8'},grid:{color:'#334155'},beginAtZero:true}}}
  });
  const vb = {'R$ 0':0,'R$ 1-30':0,'R$ 31-40':0,'R$ 41+':0};
  clientes.forEach(c=>{const v=+c.valor||0; if(v===0)vb['R$ 0']++; else if(v<=30)vb['R$ 1-30']++; else if(v<=40)vb['R$ 31-40']++; else vb['R$ 41+']++;});
  if(chartValor) chartValor.destroy();
  chartValor = new Chart(document.getElementById('chartValor'), {
    type:'doughnut',
    data:{labels:Object.keys(vb),datasets:[{data:Object.values(vb),backgroundColor:['#64748b','#f59e0b','#3b82f6','#10b981'],borderColor:'#1e293b',borderWidth:2}]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{color:'#cbd5e1',font:{size:11}}}}}
  });
}

// ============================================================
// CLIENTES — TABELA
// ============================================================
function renderClientes() {
  const q = document.getElementById('search-cliente').value.toLowerCase();
  const fs = document.getElementById('filter-status').value;
  let list = clientes.slice();
  if(q) list = list.filter(c=>(c.cliente+' '+c.app+' '+c.obs).toLowerCase().includes(q));
  if(fs) list = list.filter(c=>getStatus(c.venc).key===fs);
  list.sort((a,b)=>a.venc.localeCompare(b.venc));

  document.getElementById('tbody-clientes').innerHTML = list.map(c => {
    const st = getStatus(c.venc);
    const idx = clientes.indexOf(c);
    const meses = c.meses||1;
    const cred = creditosPorMeses(meses);
    const planoLabel = meses==1?'Mensal':meses==3?'Trimestral':meses==6?'Semestral':'Anual';
    return `<tr>
      <td><strong>${c.cliente}</strong></td>
      <td>${fmtDate(c.venc)}</td>
      <td>${brl(+c.valor||0)}</td>
      <td>${c.app||'—'}</td>
      <td><span style="font-size:11px;color:#94a3b8">${planoLabel} · ${cred} cr.</span></td>
      <td><span class="tag ${st.cls}">${st.label}</span></td>
      <td style="max-width:140px;font-size:12px;color:#94a3b8">${c.obs||''}</td>
      <td>
        <button class="btn btn-edit btn-sm" onclick="editarCliente(${idx})" style="margin-right:4px">✏️</button>
        <button class="btn btn-green btn-sm" onclick="abrirRenovar(${idx})" style="margin-right:4px">🔄</button>
        ${c.fone ? `<button class="btn btn-sm" style="background:#25d366;margin-right:4px" onclick="abrirWhats(${idx})">📲</button>` : ''}
        <button class="btn btn-red" onclick="excluirCliente(${idx})">🗑</button>
      </td>
    </tr>`;
  }).join('');
  document.getElementById('count-clientes').textContent = list.length;
}

let renovarIdx = -1;

function abrirRenovar(idx) {
  renovarIdx = idx;
  const c = clientes[idx];
  document.getElementById('renovar-nome').textContent = c.cliente + ' — vence ' + fmtDate(c.venc);
  document.getElementById('renovar-data').value = '';
  document.getElementById('modal-renovar').classList.add('open');
}

function confirmarRenovar() {
  if (renovarIdx < 0) return;
  const novaData = document.getElementById('renovar-data').value;
  if (!novaData) return alert('Informe a nova data de vencimento!');
  const c = clientes[renovarIdx];
  // Registra pagamento
  pagamentos.push({
    data: today(),
    cliente: c.cliente,
    valor: +c.valor||0,
    meses: c.meses||1
  });
  savePG();
  // Atualiza vencimento com data informada
  clientes[renovarIdx].venc = novaData;
  saveC();
  fecharModal('modal-renovar');
  refreshAll();
}
function excluirCliente(idx) {
  if(!confirm('Excluir '+clientes[idx].cliente+'?')) return;
  clientes.splice(idx,1);
  saveC(); refreshAll();
}
function addCliente() {
  const nome = document.getElementById('f-nome').value.trim();
  const venc = document.getElementById('f-venc').value;
  const valor = document.getElementById('f-valor').value;
  if(!nome||!venc||valor==='') return alert('Preencha nome, vencimento e valor!');
  clientes.push({
    cliente:nome, venc, valor:+valor,
    app:document.getElementById('f-app').value.trim(),
    tec:document.getElementById('f-tec').value,
    meses:+document.getElementById('f-meses').value,
    fone:document.getElementById('f-fone').value.trim(),
    obs:document.getElementById('f-obs').value.trim()
  });
  ['f-nome','f-venc','f-valor','f-app','f-fone','f-obs'].forEach(id=>document.getElementById(id).value='');
  saveC(); refreshAll();
  document.getElementById('form-cliente').style.display='none';
}

function exportPDF() {
  const q = document.getElementById('search-cliente').value.toLowerCase();
  const fs = document.getElementById('filter-status').value;
  let list = clientes.slice();
  if(q) list = list.filter(c=>(c.cliente+' '+c.app+' '+c.obs).toLowerCase().includes(q));
  if(fs) list = list.filter(c=>getStatus(c.venc).key===fs);
  list.sort((a,b)=>a.venc.localeCompare(b.venc));

  const statusColors = {vencido:'#ef4444', hoje:'#10b981', semana:'#f59e0b', futuro:'#3b82f6'};
  const rows = list.map(c => {
    const st = getStatus(c.venc);
    const cor = statusColors[st.key] || '#3b82f6';
    return '<tr><td>'+c.cliente+'</td><td>'+fmtDate(c.venc)+'</td><td>'+brl(+c.valor||0)+'</td><td>'+(c.app||'—')+'</td><td style="color:'+cor+';font-weight:600">'+st.label+'</td><td>'+(c.obs||'')+'</td></tr>';
  }).join('');

  const html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Clientes IPTV</title>'
    + '<style>body{font-family:Arial,sans-serif;font-size:12px;margin:20px}'
    + 'h1{font-size:18px;margin-bottom:4px}p{color:#666;margin-bottom:16px;font-size:11px}'
    + 'table{width:100%;border-collapse:collapse}'
    + 'th{background:#1e293b;color:#fff;padding:8px;text-align:left;font-size:11px}'
    + 'td{padding:7px 8px;border-bottom:1px solid #e2e8f0;font-size:11px}'
    + 'tr:nth-child(even) td{background:#f8fafc}</style></head><body>'
    + '<h1>Lista de Clientes IPTV</h1>'
    + '<p>Gerado em '+fmtDate(today())+' — '+list.length+' clientes</p>'
    + '<table><thead><tr><th>Cliente</th><th>Vencimento</th><th>Valor</th><th>Aplicativo</th><th>Status</th><th>Obs</th></tr></thead>'
    + '<tbody>'+rows+'</tbody></table>'
    + '</body></html>';

  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  w.onload = function(){ w.print(); };
}

// ============================================================
// DNS
// ============================================================
function getDnsVencStatus(venc) {
  if (!venc) return 'sem';
  const dd = diffDays(venc);
  if (dd < 0) return 'vencido';
  const now = new Date(today()+'T00:00:00');
  const d = new Date(venc+'T00:00:00');
  if (d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()) return 'mes';
  const next = new Date(now.getFullYear(), now.getMonth()+1, 1);
  const nextEnd = new Date(now.getFullYear(), now.getMonth()+2, 0);
  if (d >= next && d <= nextEnd) return 'proximo';
  return 'outro';
}

function renderDns() {
  const q = document.getElementById('search-dns').value.toLowerCase();
  const fv = document.getElementById('filter-dns-venc').value;
  let list = dnsLista.slice();
  if(q) list = list.filter(c=>(c.cliente+' '+c.app+' '+c.mac+' '+c.obs).toLowerCase().includes(q));
  if(fv) list = list.filter(c => getDnsVencStatus(c.venc) === fv);

  // Banner de resumo do mês
  const banner = document.getElementById('dns-venc-banner');
  const mesList = dnsLista.filter(c => getDnsVencStatus(c.venc) === 'mes');
  const proximoList = dnsLista.filter(c => getDnsVencStatus(c.venc) === 'proximo');
  const vencidoList = dnsLista.filter(c => getDnsVencStatus(c.venc) === 'vencido');
  banner.style.display = 'flex';
  banner.innerHTML = `
    <span>📅 <strong>Este mês:</strong> ${mesList.length} cliente${mesList.length!==1?'s':''}</span>
    <span>🗓 <strong>Mês que vem:</strong> ${proximoList.length} cliente${proximoList.length!==1?'s':''}</span>
    <span style="color:#fecaca">🔴 <strong>Vencidos:</strong> ${vencidoList.length} cliente${vencidoList.length!==1?'s':''}</span>
  `;

  document.getElementById('tbody-dns').innerHTML = list.map((c,i) => {
    const idx = dnsLista.indexOf(c);
    const obsStyle = c.obs ? 'color:#f59e0b;font-weight:600' : 'color:#64748b';
    return `<tr>
      <td><strong>${c.cliente}</strong></td>
      <td>${c.app||'—'}</td>
      <td>
        <span style="font-family:monospace;font-size:12px">${c.mac||'—'}</span>
        ${c.mac?`<button class="copy-btn" id="cm${i}" onclick="copyText('${c.mac}','cm${i}')">📋</button>`:''}
      </td>
      <td>
        <span style="font-family:monospace">${c.senha||'—'}</span>
        ${c.senha?`<button class="copy-btn" id="cs${i}" onclick="copyText('${c.senha}','cs${i}')">📋</button>`:''}
      </td>
      <td>${c.venc ? (() => { const s = getDnsVencStatus(c.venc); const colors = {vencido:'color:#fca5a5', mes:'color:#6ee7b7;font-weight:600', proximo:'color:#fde68a', outro:'color:#94a3b8'}; return `<span style="${colors[s]||''}">${fmtDate(c.venc)}</span>`; })() : '—'}</td>
      <td style="${obsStyle};font-size:12px">${c.obs||''}</td>
      <td><button class="btn btn-edit btn-sm" onclick="editarDns(${idx})" style="margin-right:4px">✏️</button><button class="btn btn-red" onclick="excluirDns(${idx})">🗑</button></td>
    </tr>`;
  }).join('');
  document.getElementById('count-dns').textContent = list.length;
}

function copyText(text, btnId) {
  navigator.clipboard.writeText(text).then(()=>{
    const btn = document.getElementById(btnId);
    if(!btn) return;
    btn.textContent='✓'; btn.classList.add('ok');
    setTimeout(()=>{btn.textContent='📋'; btn.classList.remove('ok');},1500);
  });
}

function addDns() {
  const nome = document.getElementById('df-nome').value.trim();
  if(!nome) return alert('Informe o nome do cliente!');
  dnsLista.push({
    cliente:nome,
    app:document.getElementById('df-app').value.trim(),
    mac:document.getElementById('df-mac').value.trim(),
    senha:document.getElementById('df-senha').value.trim(),
    venc:document.getElementById('df-venc').value,
    obs:document.getElementById('df-obs').value.trim()
  });
  ['df-nome','df-app','df-mac','df-senha','df-venc','df-obs'].forEach(id=>document.getElementById(id).value='');
  saveD(); renderDns();
  document.getElementById('form-dns').style.display='none';
}

function excluirDns(idx) {
  if(!confirm('Excluir '+dnsLista[idx].cliente+' da lista DNS?')) return;
  dnsLista.splice(idx,1);
  saveD(); renderDns();
}

let editIdx = -1;
let editType = '';

function editarDns(idx) {
  editIdx = idx; editType = 'dns';
  const c = dnsLista[idx];
  document.getElementById('edit-nome').value  = c.cliente||'';
  document.getElementById('edit-app').value   = c.app||'';
  document.getElementById('edit-mac').value   = c.mac||'';
  document.getElementById('edit-senha').value = c.senha||'';
  document.getElementById('edit-venc').value  = c.venc||'';
  document.getElementById('edit-obs').value   = c.obs||'';
  document.getElementById('modal-dns').classList.add('open');
}

function editarCliente(idx) {
  editIdx = idx; editType = 'cliente';
  const c = clientes[idx];
  document.getElementById('ec-nome').value  = c.cliente||'';
  document.getElementById('ec-venc').value  = c.venc||'';
  document.getElementById('ec-valor').value = c.valor||'';
  document.getElementById('ec-app').value   = c.app||'';
  document.getElementById('ec-tec').value   = c.tec||'IPTV';
  document.getElementById('ec-meses').value = c.meses||1;
  document.getElementById('ec-fone').value  = c.fone||'';
  document.getElementById('ec-obs').value   = c.obs||'';
  document.getElementById('modal-cliente').classList.add('open');
}

function fecharModal(id) {
  document.getElementById(id).classList.remove('open');
  editIdx = -1;
}

function salvarEdicaoDns() {
  if(editIdx < 0) return;
  const nome = document.getElementById('edit-nome').value.trim();
  if(!nome) return alert('Informe o nome do cliente!');
  dnsLista[editIdx] = {
    cliente: nome,
    app:     document.getElementById('edit-app').value.trim(),
    mac:     document.getElementById('edit-mac').value.trim(),
    senha:   document.getElementById('edit-senha').value.trim(),
    venc:    document.getElementById('edit-venc').value,
    obs:     document.getElementById('edit-obs').value.trim(),
  };
  saveD(); renderDns(); fecharModal('modal-dns');
}

function salvarEdicaoCliente() {
  if(editIdx < 0) return;
  const nome = document.getElementById('ec-nome').value.trim();
  if(!nome) return alert('Informe o nome do cliente!');
  clientes[editIdx] = {
    cliente: nome,
    venc:    document.getElementById('ec-venc').value,
    valor:   +document.getElementById('ec-valor').value||0,
    app:     document.getElementById('ec-app').value.trim(),
    tec:     document.getElementById('ec-tec').value,
    meses:   +document.getElementById('ec-meses').value||1,
    fone:    document.getElementById('ec-fone').value.trim(),
    obs:     document.getElementById('ec-obs').value.trim(),
  };
  saveC(); refreshAll(); fecharModal('modal-cliente');
}

// Fechar modais clicando fora
document.getElementById('modal-dns').addEventListener('click', function(e){ if(e.target===this) fecharModal('modal-dns'); });
document.getElementById('modal-cliente').addEventListener('click', function(e){ if(e.target===this) fecharModal('modal-cliente'); });
document.getElementById('modal-renovar').addEventListener('click', function(e){ if(e.target===this) fecharModal('modal-renovar'); });

// preview créditos no formulário
document.getElementById('f-meses').addEventListener('change', function(){
  const cred = creditosPorMeses(this.value);
  document.getElementById('f-creditos-preview').textContent = '= ' + cred + ' crédito' + (cred!==1?'s':'');
});

// ============================================================
// COMPRAS DE CRÉDITOS
// ============================================================
function addCompra() {
  const creditos = +document.getElementById('cp-creditos').value;
  const valor    = +document.getElementById('cp-valor').value;
  const data     = document.getElementById('cp-data').value;
  if(!creditos||!valor) return alert('Informe créditos e valor!');
  compras.push({
    data: data || today(),
    creditos,
    valor,
    fornecedor: document.getElementById('cp-fornecedor').value.trim()
  });
  ['cp-creditos','cp-valor','cp-fornecedor'].forEach(id=>document.getElementById(id).value='');
  saveCP(); renderCreditos();
  document.getElementById('form-compra').style.display='none';
}

function excluirCompra(idx) {
  if(!confirm('Excluir esta compra?')) return;
  compras.splice(idx,1);
  saveCP(); renderCreditos();
}

function renderCreditos() {
  // KPIs de créditos
  const totalComprado  = compras.reduce((s,c)=>s+(+c.creditos||0),0);
  const totalInvestido = compras.reduce((s,c)=>s+(+c.valor||0),0);
  const totalUsado     = clientes.reduce((s,c)=>s+creditosPorMeses(c.meses||1),0);
  const saldo          = totalComprado - totalUsado;

  // Créditos usados no mês atual (baseado em pagamentos registrados)
  const now = new Date(today()+'T00:00:00');
  const mesAtual = now.getMonth();
  const anoAtual = now.getFullYear();
  const creditosPagamento = p => p.creditos !== undefined ? +p.creditos : creditosPorMeses(p.meses||1);

  // Bônus do mês atual
  const bonusMes = bonusList.filter(b => {
    const d = new Date(b.data+'T00:00:00');
    return d.getMonth() === mesAtual && d.getFullYear() === anoAtual;
  }).reduce((s,b) => s + (+b.creditos||0), 0);

  // Usados no mês = renovações + bônus recebidos no mês
  const renovacoesMes = pagamentos.filter(p => {
    const d = new Date(p.data+'T00:00:00');
    return d.getMonth() === mesAtual && d.getFullYear() === anoAtual;
  }).reduce((s,p) => s + creditosPagamento(p), 0);
  const usadosMes = renovacoesMes + bonusMes;

  // Créditos disponíveis = saldo inicial + comprados + bônus - renovações totais - bônus totais
  const totalBonus = bonusList.reduce((s,b) => s + (+b.creditos||0), 0);
  const totalRenovacoes = pagamentos.reduce((s,p) => s + creditosPagamento(p), 0);
  const disponiveis = saldoInicial + totalComprado - totalRenovacoes;

  const _sc = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  _sc('cr-comprados', totalComprado.toFixed(1));
  _sc('cr-comprados-val', brl(totalInvestido));
  _sc('cr-usados-mes', usadosMes.toFixed(1));
  _sc('cr-usados-mes-val', brl(usadosMes * CUSTO_CREDITO));
  _sc('cr-disponiveis', disponiveis.toFixed(1));
  _sc('cr-disponiveis-val', brl(disponiveis * CUSTO_CREDITO));
  _sc('cr-saldo', saldo.toFixed(1));
  _sc('cr-saldo-val', brl(saldo * CUSTO_CREDITO));
  _sc('cr-investido', brl(totalInvestido));

  carregarSaldoInicial();

  // Tabela de compras
  document.getElementById('tbody-compras').innerHTML = compras.length === 0
    ? '<tr><td colspan="6" style="color:#64748b;text-align:center;padding:20px">Nenhuma compra registrada ainda</td></tr>'
    : compras.map((c,i)=>`<tr>
        <td>${fmtDate(c.data)}</td>
        <td><strong>${(+c.creditos).toFixed(1)}</strong></td>
        <td>${brl(+c.valor)}</td>
        <td style="color:#94a3b8;font-size:12px">${brl(c.valor/c.creditos)}/cr.</td>
        <td style="color:#94a3b8;font-size:12px">${c.fornecedor||'—'}</td>
        <td><button class="btn btn-red" onclick="excluirCompra(${i})">🗑</button></td>
      </tr>`).join('');
}

// ============================================================
// RESUMO MENSAL
// ============================================================
function renderMensal() {
  const meses = {};
  const now = new Date(today()+'T00:00:00');
  const mesAtualKey = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;

  // Baseado no histórico real de pagamentos
  pagamentos.forEach(p => {
    const d = new Date(p.data+'T00:00:00');
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    const label = d.toLocaleDateString('pt-BR', {month:'long', year:'numeric'});
    if (!meses[key]) meses[key] = {label, clientes:0, receita:0, creditos:0};
    meses[key].clientes++;
    meses[key].receita += +p.valor||0;
    meses[key].creditos += creditosPorMeses(p.meses||1);
  });

  if (Object.keys(meses).length === 0) {
    document.getElementById('tbody-mensal').innerHTML = '<tr><td colspan="5" style="color:#64748b;text-align:center;padding:30px">Nenhum pagamento registrado ainda.<br><span style="font-size:12px">Clique em +30d ao renovar um cliente para registrar automaticamente.</span></td></tr>';
    return;
  }

  const keys = Object.keys(meses).sort();

  document.getElementById('tbody-mensal').innerHTML = keys.map(k => {
    const m = meses[k];
    const custo = m.creditos * CUSTO_CREDITO;
    const lucro = m.receita - custo;
    const isAtual = k === mesAtualKey;
    const lucroColor = lucro >= 0 ? '#10b981' : '#ef4444';
    const rowStyle = isAtual ? 'background:#1e3a5f22' : '';
    const badge = isAtual ? ' <span style="background:#3b82f6;color:#fff;font-size:10px;padding:1px 6px;border-radius:4px;margin-left:4px">atual</span>' : '';
    return `<tr style="${rowStyle}">
      <td><strong>${m.label.charAt(0).toUpperCase()+m.label.slice(1)}${badge}</strong></td>
      <td style="font-weight:700">${m.clientes}</td>
      <td style="color:#10b981;font-weight:600">${brl(m.receita)}</td>
      <td style="color:#ef4444">${brl(custo)}</td>
      <td style="color:${lucroColor};font-weight:700">${brl(lucro)}</td>
    </tr>`;
  }).join('');

  const total = keys.reduce((acc, k) => {
    acc.clientes += meses[k].clientes;
    acc.receita  += meses[k].receita;
    acc.creditos += meses[k].creditos;
    return acc;
  }, {clientes:0, receita:0, creditos:0});
  const totalCusto = total.creditos * CUSTO_CREDITO;
  const totalLucro = total.receita - totalCusto;

  document.getElementById('tbody-mensal').innerHTML += `<tr style="border-top:2px solid #334155;background:#0f172a">
    <td><strong>TOTAL</strong></td>
    <td><strong>${total.clientes}</strong></td>
    <td style="color:#10b981;font-weight:700">${brl(total.receita)}</td>
    <td style="color:#ef4444;font-weight:700">${brl(totalCusto)}</td>
    <td style="color:${totalLucro>=0?'#10b981':'#ef4444'};font-weight:700">${brl(totalLucro)}</td>
  </tr>`;
}

// ============================================================
// SALDO INICIAL
// ============================================================
function salvarSaldoInicial() {
  const val = parseFloat(document.getElementById('saldo-inicial').value||'0');
  saldoInicial = val;
  localStorage.setItem(SI_KEY, val.toString());
  fbSave('saldo_inicial', [val]);
  renderCreditos();
}

function carregarSaldoInicial() {
  const el = document.getElementById('saldo-inicial');
  if (el) el.value = saldoInicial > 0 ? saldoInicial : '';
}

// ============================================================
// WHATSAPP
// ============================================================
function abrirWhats(idx) {
  const c = clientes[idx];
  const fone = c.fone.replace(/\D/g,'');
  const dd = diffDays(c.venc);
  let msg = '';
  if (dd < 0) {
    msg = `Olá ${c.cliente}! Sua assinatura IPTV venceu em ${fmtDate(c.venc)}. Entre em contato para renovar! 😊`;
  } else if (dd === 0) {
    msg = `Olá ${c.cliente}! Sua assinatura IPTV vence hoje (${fmtDate(c.venc)}). Renove para não ficar sem! 😊`;
  } else {
    msg = `Olá ${c.cliente}! Sua assinatura IPTV vence em ${fmtDate(c.venc)} (${dd} dias). Renove com antecedência! 😊`;
  }
  const url = `https://wa.me/55${fone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ============================================================
// TRILHA DE BÔNUS
// ============================================================
function calcularERegistrarBonus() {
  const ontem = new Date(today()+'T00:00:00');
  ontem.setDate(ontem.getDate()-1);
  const ontemStr = ontem.toISOString().slice(0,10);

  // Verifica se já registrou bônus de ontem
  const jaRegistrado = bonusList.some(b => b.data === ontemStr);
  if (jaRegistrado) return;

  // Conta créditos gastos ontem
  const renovacoesOntem = pagamentos.filter(p => p.data === ontemStr);
  if (renovacoesOntem.length === 0) return;

  const creditosGastos = renovacoesOntem.reduce((s,p) => s + creditosPorMeses(p.meses||1), 0);
  const pontos = Math.min(creditosGastos * 10, 1000);
  const creditosBonus = Math.floor(pontos / 100);

  if (creditosBonus > 0) {
    bonusList.push({
      data: ontemStr,
      renovacoes: renovacoesOntem.length,
      pontos: pontos,
      creditos: creditosBonus
    });
    saveBN();
  }
}

function renderBonus() {
  calcularERegistrarBonus();

  // Info de hoje
  const renovacoesHoje = pagamentos.filter(p => p.data === today());
  const creditosHoje = renovacoesHoje.reduce((s,p) => s + creditosPorMeses(p.meses||1), 0);
  const pontosHoje = Math.min(creditosHoje * 10, 1000);
  const bonusAmanha = Math.floor(pontosHoje / 100);

  const info = document.getElementById('trilha-info');
  if (info) {
    info.innerHTML = `
      <div style="display:flex;gap:24px;flex-wrap:wrap">
        <span>📊 <strong>Hoje:</strong> ${renovacoesHoje.length} renovações · ${pontosHoje} pontos acumulados</span>
        <span style="color:#f59e0b">🏆 <strong>Bônus amanhã:</strong> ${bonusAmanha} crédito${bonusAmanha!==1?'s':''}</span>
      </div>`;
  }

  const tbody = document.getElementById('tbody-bonus');
  if (!tbody) return;

  if (bonusList.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="color:#64748b;text-align:center;padding:20px">Nenhum bônus registrado ainda.<br><span style="font-size:12px">Faça 10+ renovações em um dia para ganhar créditos bônus.</span></td></tr>';
    return;
  }

  tbody.innerHTML = bonusList.slice().reverse().map((b,i) => {
    const realIdx = bonusList.length - 1 - i;
    return `<tr>
      <td>${fmtDate(b.data)}</td>
      <td>${b.renovacoes}</td>
      <td style="color:#f59e0b;font-weight:600">${b.pontos}</td>
      <td style="color:#10b981;font-weight:700">+${b.creditos} crédito${b.creditos!==1?'s':''}</td>
      <td><button class="btn btn-red" onclick="excluirBonus(${realIdx})">🗑</button></td>
    </tr>`;
  }).join('');
}

// ============================================================
// BONUS MANUAL
// ============================================================
function addBonus() {
  const data     = document.getElementById('bn-data').value || today();
  const renovs   = +document.getElementById('bn-renovacoes').value;
  const pontos   = Math.min(+document.getElementById('bn-pontos').value, 1000);
  if (!renovs || !pontos) return alert('Preencha renovações e pontos!');
  const creditos = Math.floor(pontos / 100);
  bonusList.push({ data, renovacoes: renovs, pontos, creditos });
  saveBN();
  ['bn-data','bn-renovacoes','bn-pontos'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('form-bonus').style.display = 'none';
  refreshAll();
}

function excluirBonus(idx) {
  if (!confirm('Excluir este bônus?')) return;
  bonusList.splice(idx, 1);
  saveBN();
  refreshAll();
}

// ============================================================
// PROJEÇÃO
// ============================================================
function renderProjecao() {
  const now = new Date(today()+'T00:00:00');
  const mesAtualNum = now.getFullYear() * 12 + now.getMonth();

  // Gera 12 meses a partir do mês atual
  const meses = {};
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    const key = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0');
    const label = d.toLocaleDateString('pt-BR', {month:'long', year:'numeric'});
    meses[key] = {label, clientes:0, receita:0, creditos:0};
  }

  // Cada cliente entra a partir do seu mês de vencimento e repete mensalmente
  // Sempre considera 1 crédito (mensal) e o valor cadastrado
  clientes.forEach(c => {
    const dVenc = new Date(c.venc+'T00:00:00');
    const vencNum = dVenc.getFullYear() * 12 + dVenc.getMonth();
    const valorMensal = +c.valor || 0; // usa o valor cadastrado (pode ser 0, 35, 40, etc)

    Object.keys(meses).forEach(key => {
      const [y, m] = key.split('-').map(Number);
      const keyNum = y * 12 + (m - 1);
      if (keyNum >= vencNum) {
        meses[key].clientes++;
        meses[key].receita += valorMensal;
        meses[key].creditos += 1; // sempre 1 crédito mensal
      }
    });
  });

  const mesAtualKey = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0');
  const keys = Object.keys(meses).sort();
  const tbody = document.getElementById('tbody-projecao');
  if (!tbody) return;

  tbody.innerHTML = keys.map(k => {
    const m = meses[k];
    const custo = m.creditos * CUSTO_CREDITO;
    const lucro = m.receita - custo;
    const isAtual = k === mesAtualKey;
    const lucroColor = lucro >= 0 ? '#10b981' : '#ef4444';
    const rowStyle = isAtual ? 'background:#1e3a5f22' : '';
    const badge = isAtual ? ' <span style="background:#3b82f6;color:#fff;font-size:10px;padding:1px 6px;border-radius:4px;margin-left:4px">atual</span>' : '';
    const label = m.label.charAt(0).toUpperCase() + m.label.slice(1);
    return `<tr style="${rowStyle}">
      <td><strong>${label}${badge}</strong></td>
      <td style="font-weight:700">${m.clientes}</td>
      <td style="color:#10b981;font-weight:600">${brl(m.receita)}</td>
      <td style="color:#ef4444">${brl(custo)}</td>
      <td style="color:${lucroColor};font-weight:700">${brl(lucro)}</td>
    </tr>`;
  }).join('');
}

// ============================================================
// CONTROLE DO MÊS
// ============================================================
function popularMesesControle() {
  const sel = document.getElementById('controle-mes');
  if (!sel) return;
  const valorSelecionado = sel.value;
  const mesesSet = new Set();

  // Meses com pagamentos
  pagamentos.forEach(p => { if (p.data) mesesSet.add(p.data.slice(0,7)); });

  // Sempre inclui mês atual e próximo
  const now = new Date();
  for (let i = -1; i <= 3; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    mesesSet.add(d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0'));
  }

  const meses = Array.from(mesesSet).sort().reverse();
  const atual = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0');
  
  const selecionado = meses.includes(valorSelecionado) ? valorSelecionado : atual;
  sel.innerHTML = meses.map(m => {
    const [y, mo] = m.split('-');
    const label = new Date(+y, +mo-1, 1).toLocaleDateString('pt-BR', {month:'long', year:'numeric'});
    const l = label.charAt(0).toUpperCase() + label.slice(1);
    return `<option value="${m}" ${m === selecionado ? 'selected' : ''}>${l}</option>`;
  }).join('');
}

function renderControle() {
  popularMesesControle();
  const sel = document.getElementById('controle-mes');
  if (!sel) return;
  const mesSel = sel.value;
  if (!mesSel) return;

  // Filtra pagamentos do mês selecionado
  const lista = pagamentos.filter(p => p.data && p.data.slice(0,7) === mesSel);
  lista.sort((a,b) => a.data.localeCompare(b.data));

  const totalReceita = lista.reduce((s,p) => s + (+p.valor||0), 0);
  const totalCreditos = lista.reduce((s,p) => s + (p.creditos !== undefined ? +p.creditos : creditosPorMeses(p.meses||1)), 0);
  const totalCusto = totalCreditos * CUSTO_CREDITO;
  const totalLucro = totalReceita - totalCusto;

  const _set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  _set('ctrl-clientes', lista.length);
  _set('ctrl-receita', brl(totalReceita));
  _set('ctrl-creditos', totalCreditos.toFixed(1));
  _set('ctrl-custo', brl(totalCusto));
  _set('ctrl-lucro', brl(totalLucro));
  _set('ctrl-lucro-sub', totalLucro >= 0 ? 'lucro' : 'prejuízo');

  const tbody = document.getElementById('tbody-controle');
  if (!tbody) return;

  if (lista.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="color:#64748b;text-align:center;padding:30px">Nenhum pagamento registrado neste mês.<br><span style="font-size:12px">Use o botão 🔄 para renovar clientes e registrar pagamentos.</span></td></tr>';
    return;
  }

  tbody.innerHTML = lista.map((p, i) => {
    const realIdx = pagamentos.indexOf(p);
    const cred = p.creditos !== undefined ? +p.creditos : creditosPorMeses(p.meses||1);
    return `<tr>
      <td>${fmtDate(p.data)}</td>
      <td><strong>${p.cliente}</strong></td>
      <td style="color:#10b981;font-weight:600">${brl(+p.valor||0)}</td>
      <td style="color:#f59e0b">${cred.toFixed(1)}</td>
      <td><button class="btn btn-red" onclick="excluirPagamento(${realIdx})">🗑</button></td>
    </tr>`;
  }).join('');

  // Linha de total
  tbody.innerHTML += `<tr style="border-top:2px solid #334155;background:#0f172a">
    <td colspan="2"><strong>TOTAL</strong></td>
    <td style="color:#10b981;font-weight:700">${brl(totalReceita)}</td>
    <td style="color:#f59e0b;font-weight:700">${totalCreditos.toFixed(1)}</td>
    <td></td>
  </tr>`;
}

function excluirPagamento(idx) {
  if (!confirm('Excluir este pagamento?')) return;
  pagamentos.splice(idx, 1);
  savePG();
  refreshAll();
  renderControle();
}

// ============================================================
// PREVISÃO DIÁRIA
// ============================================================
function popularMesesPrevisao() {
  const sel = document.getElementById('previsao-mes');
  if (!sel) return;
  const mesesSet = new Set();

  clientes.forEach(c => { if(c.venc) mesesSet.add(c.venc.slice(0,7)); });

  const now = new Date();
  for (let i = -1; i <= 6; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    mesesSet.add(d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0'));
  }

  const meses = Array.from(mesesSet).sort();
  const atual = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0');

  sel.innerHTML = meses.map(m => {
    const [y, mo] = m.split('-');
    const label = new Date(+y, +mo-1, 1).toLocaleDateString('pt-BR', {month:'long', year:'numeric'});
    const l = label.charAt(0).toUpperCase() + label.slice(1);
    return `<option value="${m}" ${m === atual ? 'selected' : ''}>${l}</option>`;
  }).join('');
}

function renderPrevisao() {
  popularMesesPrevisao();
  const sel = document.getElementById('previsao-mes');
  if (!sel) return;
  const mesSel = sel.value;
  if (!mesSel) return;

  // Filtra clientes que vencem no mês selecionado
  const lista = clientes.filter(c => c.venc && c.venc.slice(0,7) === mesSel);

  // Agrupa por dia
  const dias = {};
  lista.forEach(c => {
    const dia = c.venc;
    if (!dias[dia]) dias[dia] = {clientes:[], total:0};
    dias[dia].clientes.push(c);
    dias[dia].total += +c.valor||0;
  });

  const totalClientes = lista.length;
  const totalValor = lista.reduce((s,c) => s + (+c.valor||0), 0);
  const totalDias = Object.keys(dias).length;

  const _set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  _set('prev-clientes', totalClientes);
  _set('prev-total', brl(totalValor));
  _set('prev-dias', totalDias);

  const tbody = document.getElementById('tbody-previsao');
  if (!tbody) return;

  if (Object.keys(dias).length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" style="color:#64748b;text-align:center;padding:30px">Nenhum cliente vence neste mês.</td></tr>';
    return;
  }

  const hoje = today();
  tbody.innerHTML = Object.keys(dias).sort().map(dia => {
    const d = dias[dia];
    const isHoje = dia === hoje;
    const isPast = dia < hoje;
    const rowStyle = isHoje ? 'background:#1e3a5f33' : isPast ? 'opacity:0.6' : '';
    const badge = isHoje ? ' <span style="background:#10b981;color:#fff;font-size:10px;padding:1px 6px;border-radius:4px;margin-left:4px">hoje</span>' : '';
    const nomes = d.clientes.map(c => `<span style="font-size:11px;background:#1e293b;padding:2px 7px;border-radius:4px;margin:2px;display:inline-block">${c.cliente}</span>`).join('');
    return `<tr style="${rowStyle}">
      <td><strong>${fmtDate(dia)}${badge}</strong></td>
      <td style="font-weight:700">${d.clientes.length}</td>
      <td style="color:#10b981;font-weight:600">${brl(d.total)}</td>
      <td style="line-height:1.8">${nomes}</td>
    </tr>`;
  }).join('');

  // Total
  tbody.innerHTML += `<tr style="border-top:2px solid #334155;background:#0f172a">
    <td><strong>TOTAL</strong></td>
    <td><strong>${totalClientes}</strong></td>
    <td style="color:#10b981;font-weight:700">${brl(totalValor)}</td>
    <td></td>
  </tr>`;
}

// ============================================================
// INIT — Firebase primeiro, localStorage só como fallback
// ============================================================
function refreshAll() { updateKPIs(); updateCharts(); renderClientes(); renderCreditos(); renderBonus(); renderProjecao(); renderControle(); renderPrevisao(); }

(async () => {
  document.getElementById('sync-status').textContent = '🔄 Sincronizando...';
  try {
    const cl = await fbLoad('clientes');
    const dn = await fbLoad('dns');
    const cp = await fbLoad('compras');
    const pg = await fbLoad('pagamentos');

    // Sempre usa Firebase se tiver dados
    if (cl && cl.length > 0) { clientes = cl; localStorage.setItem(CL_KEY, JSON.stringify(cl)); }
    if (dn && dn.length > 0) { dnsLista = dn; localStorage.setItem(DN_KEY, JSON.stringify(dn)); }
    if (cp !== null) { compras = cp; localStorage.setItem(CP_KEY, JSON.stringify(cp)); }
    if (pg !== null) { pagamentos = pg; localStorage.setItem(PG_KEY, JSON.stringify(pg)); }
    const bn = await fbLoad('bonus');
    if (bn !== null) { bonusList = bn; localStorage.setItem(BN_KEY, JSON.stringify(bn)); }
    const si = await fbLoad('saldo_inicial');
    if (si !== null && si.length > 0) { saldoInicial = parseFloat(si[0]||0); localStorage.setItem(SI_KEY, saldoInicial.toString()); }

    const painelSync = sincronizarVencimentosPainel();
    const recomposicoes = recomporPagamentosMesAtual();
    const detalhes = [];
    if (painelSync.alterados || painelSync.criados) detalhes.push(`${painelSync.alterados + painelSync.criados} cliente${painelSync.alterados + painelSync.criados!==1?'s':''} atualizado${painelSync.alterados + painelSync.criados!==1?'s':''}`);
    if (recomposicoes > 0) detalhes.push(`${recomposicoes} renovação${recomposicoes!==1?'ões':''} recuperada${recomposicoes!==1?'s':''}`);
    document.getElementById('sync-status').textContent = detalhes.length ? `✅ Sincronizado (${detalhes.join(', ')})` : '✅ Sincronizado';
  } catch(e) {
    console.error("Erro Firebase:", e);
    document.getElementById('sync-status').textContent = '⚠️ Offline';
  } finally {
    refreshAll();
    renderDns();
  }
})();
