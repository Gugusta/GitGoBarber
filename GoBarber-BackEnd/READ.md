# Atualização do Pefil -> TO DO

**Requisitos Funcionais**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**REGRAS DE NEGÓCIO**

- O usuário não pode alterar seu e-mail para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha

*******************************************************************************

# Recuperação de senha -> TO DO

**Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instrucoes de recuperacao de senha;
- O usuário deve poder resetar sua senha;

**Requisitos NÃO Funcionais**

- Utilizar mailtrap para testar envios em ambiente em desenvolvimento.
- Utilizar Amazon SES para envios em produção
- O envio de e-mails deve acontecer em segundo plano

**REGRAS DE NEGÓCIO**

- O link enviado deve expirar em duas horas;
- Para atualizar sua NOVA senha, o usuário precisa confirmar a nova senha

*******************************************************************************

# Painel do Prestador -> TO DO

**Requisitos Funcionais**

- O prestador deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos NÃO Funcionais**

- Os agendamentos do prestador do dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;


**REGRAS DE NEGÓCIO**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa ter controle

*******************************************************************************

# Agendamento de Serviços -> TO DO

**Requisitos Funcionais**

- O usuário deve poder listar todos prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horario disponível de um prestador;
- O usuário deve poder listar horários disponiveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos NÃO Funcionais**

- A listagem de prestadores deve ser armazenada em cache;
-

**REGRAS DE NEGÓCIO**

- Cada agendamento deve durar exatamente uma hora;
- Os agendamentos devem estar disponíveis entre 8h e 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

*******************************************************************************

