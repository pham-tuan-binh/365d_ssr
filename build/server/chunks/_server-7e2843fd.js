import { j as json } from './index2-2b68e648.js';

const quotes = [
  {
    quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "Harriet Tubman"
  },
  {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
  },
  {
    quote: "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.",
    author: "Sri Chinmoy"
  },
  {
    quote: "You're never a loser until you quit trying.",
    author: "Mike Ditka"
  },
  {
    quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
    author: "Ernest Hemingway"
  },
  {
    quote: "Where there is love there is life.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Small opportunities are often the beginning of great enterprises.",
    author: "Demosthenes"
  },
  {
    quote: "Better than a thousand hollow words, is one word that brings peace.",
    author: "The Buddha"
  },
  {
    quote: "No man has a good enough memory to be a successful liar.",
    author: "Abraham Lincoln"
  },
  {
    quote: "I allow my intuition to lead my path.",
    author: "Manuel Puig"
  },
  {
    quote: "I think somehow, we learn who we really are and then live with that decision.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "To enjoy life, we must touch much of it lightly.",
    author: "Voltaire"
  },
  {
    quote: "Whether you think you can or you think you can't, you are right.",
    author: "Henry Ford"
  },
  {
    quote: "No valid plans for the future can be made by those who have no capacity for living now.",
    author: "Alan Watts"
  },
  {
    quote: "Conditions fall apart. Persist with diligence.",
    author: "The Buddha"
  },
  {
    quote: "To free us from the expectations of others, to give us back to ourselves... there lies the great, singular power of self-respect.",
    author: "Joan Didion"
  },
  {
    quote: "Whoever doesn't flare up at someone who's angry wins a battle hard to win.",
    author: "The Buddha"
  },
  {
    quote: "Great ideas often receive violent opposition from mediocre minds.",
    author: "Albert Einstein"
  },
  {
    quote: "Know, first, who you are, and then adorn yourself accordingly.",
    author: "Epictetus"
  },
  {
    quote: "Whenever something negative happens to you, there is a deep lesson concealed within it.",
    author: "Eckhart Tolle"
  },
  {
    quote: "Short words are best and the old words when short are best of all.",
    author: "Winston Churchill"
  },
  {
    quote: "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    author: "Laozi"
  },
  {
    quote: "Go for it now. The future is promised to no one.",
    author: "Wayne Dyer"
  },
  {
    quote: "I do not know the American gentleman, god forgive me for putting two such words together.",
    author: "Charles Dickens"
  },
  {
    quote: "Pain and foolishness lead to great bliss and complete knowledge, for Eternal Wisdom created nothing under the sun in vain.",
    author: "Kahlil Gibran"
  },
  {
    quote: "Our intention creates our reality.",
    author: "Wayne Dyer"
  },
  {
    quote: "I'm tired of hearing about money, money, money, money, money. I just want to play the game, drink Pepsi, and wear Reebok.",
    author: "Shaquille O'Neal"
  },
  {
    quote: "I decided that it was not wisdom that enabled poets to write their poetry, but a kind of instinct or inspiration, such as you find in seers and prophets who deliver all their sublime messages without knowing in the least what they mean.",
    author: "Isocrates"
  },
  {
    quote: "Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.",
    author: "Francis of Assisi"
  },
  {
    quote: "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
    author: "Lucille Ball"
  },
  {
    quote: "The gambling known as business looks with austere disfavor upon the business known as gambling.",
    author: "Ambrose Bierce"
  },
  {
    quote: "If you fell down yesterday, stand up today.",
    author: "H. G. Wells"
  },
  {
    quote: "What you do today can improve all your tomorrows.",
    author: "Ralph Marston"
  },
  {
    quote: "Opportunity often comes disguised in the form of misfortune, or temporary defeat.",
    author: "Napoleon Hill"
  },
  {
    quote: "No man was ever wise by chance.",
    author: "Seneca the Younger"
  },
  {
    quote: "Do you know what my favorite part of the game is? The opportunity to play.",
    author: "Mike Singletary (basketball)"
  },
  {
    quote: "The person who makes a success of living is the one who see his goal steadily and aims for it unswervingly. That is dedication.",
    author: "Cecil B. DeMille"
  },
  {
    quote: "A hero is no braver than an ordinary man, but he is braver five minutes longer.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Give a man a fish and you feed him for a day. Teach him how to fish and you feed him for a lifetime.",
    author: "Laozi"
  },
  {
    quote: "Fine words and an insinuating appearance are seldom associated with true virtue",
    author: "Confucius"
  },
  {
    quote: "If we are not given the chance to forget, we are also not given the chance to recover our memories, to alter them with time, perspective, and wisdom. Forgetting, we can be ourselves beyond what the past has told us we are; we can evolve. That is the possibility we want from the future.",
    author: "Caterina Fake"
  },
  {
    quote: "We read the world wrong and say that it deceives us.",
    author: "Rabindranath Tagore"
  },
  {
    quote: "Beware of missing chances; otherwise it may be altogether too late someday.",
    author: "Franz Liszt"
  },
  {
    quote: "Nothing strengthens authority so much as silence.",
    author: "Leonardo da Vinci"
  },
  {
    quote: "He who angers you conquers you.",
    author: "Elizabeth Kenny"
  },
  {
    quote: "We all grow up. Hopefully, we get wiser. Age brings wisdom, and fatherhood changes one's life completely.",
    author: "Frank Abagnale"
  },
  {
    quote: "They say that time changes things, but you actually have to change them yourself.",
    author: "Andy Warhol"
  },
  {
    quote: "Your mind will answer most questions if you learn to relax and wait for the answer.",
    author: "William Burroughs"
  },
  {
    quote: "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer"
  },
  {
    quote: "When an opponent comes forward, move in and greet him; if he wants to pull back, send him on his way.",
    author: "Morihei Ueshiba"
  },
  {
    quote: "We the people are the rightful masters of both Congress and the courts, not to overthrow the Constitution but to overthrow the men who pervert the Constitution.",
    author: "Abraham Lincoln"
  },
  {
    quote: "The best way out is always through.",
    author: "Robert Frost"
  },
  {
    quote: "There is no retirement for an artist, it's your way of living so there is no end to it.",
    author: "Henry Moore"
  },
  {
    quote: "Our work is the presentation of our capabilities.",
    author: "Edward Gibbon"
  },
  {
    quote: "Chaos and Order are not enemies, only opposites.",
    author: "Richard Garriott"
  },
  {
    quote: "When the world is so complicated, the simple gift of friendship is within all of our hands.",
    author: "Maria Shriver"
  },
  {
    quote: "I will prepare and some day my chance will come.",
    author: "Abraham Lincoln"
  },
  {
    quote: "What sweetness is left in life, if you take away friendship? Robbing life of friendship is like robbing the world of the sun. A true friend is more to be esteemed than kinsfolk.",
    author: "Cicero"
  },
  {
    quote: "You don't play against opponents, you play against the game of basketball.",
    author: "Bob Knight"
  },
  {
    quote: "Happiness does not come from doing easy work but from the afterglow of satisfaction that comes after the achievement of a difficult task that demanded our best.",
    author: "Theodore Isaac Rubin"
  },
  {
    quote: "Well begun is half done.",
    author: "Aristotle"
  },
  {
    quote: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant"
  },
  {
    quote: "Whatever happens, take responsibility.",
    author: "Tony Robbins"
  },
  {
    quote: "Hope arouses, as nothing else can arouse, a passion for the possible.",
    author: "William Sloane Coffin"
  },
  {
    quote: "To be wronged is nothing unless you continue to remember it.",
    author: "Confucius"
  },
  {
    quote: "Our kindness may be the most persuasive argument for that which we believe.",
    author: "Gordon Hinckley"
  },
  {
    quote: "If you have made mistakes, there is always another chance for you. You may have a fresh start any moment you choose.",
    author: "Mary Pickford"
  },
  {
    quote: "Nature and books belong to the eyes that see them.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "All difficult things have their origin in that which is easy, and great things in that which is small.",
    author: "Laozi"
  },
  {
    quote: "A mind unruffled by the vagaries of fortune, from sorrow freed, from defilements cleansed, from fear liberated — this is the greatest blessing.",
    author: "The Buddha"
  },
  {
    quote: "Technology… is a queer thing. It brings you great gifts with one hand, and it stabs you in the back with the other.",
    author: "Carrie Snow"
  },
  {
    quote: "Being entirely honest with oneself is a good exercise.",
    author: "Sigmund Freud"
  },
  {
    quote: "The more you like yourself, the less you are like anyone else, which makes you unique.",
    author: "Walt Disney"
  },
  {
    quote: "It is common sense to take a method and try it. If it fails, admit it frankly and try another. But above all, try something.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Friends show their love in times of trouble, not in happiness.",
    author: "Euripides"
  },
  {
    quote: "There is only one happiness in life, to love and be loved.",
    author: "George Sand"
  },
  {
    quote: "The fewer rules a coach has, the fewer rules there are for players to break.",
    author: "John Madden"
  },
  {
    quote: "The less effort, the faster and more powerful you will be.",
    author: "Bruce Lee"
  },
  {
    quote: "Things do not change; we change.",
    author: "Henry David Thoreau"
  },
  {
    quote: "How we spend our days is, of course, how we spend our lives.",
    author: "Annie Dillard"
  },
  {
    quote: "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.",
    author: "Og Mandino"
  },
  {
    quote: "A fine quotation is a diamond on the finger of a man of wit, and a pebble in the hand of a fool.",
    author: "Joseph Roux"
  },
  {
    quote: "It is one of the severest tests of friendship to tell your friend his faults. So to love a man that you cannot bear to see a stain upon him, and to speak painful truth through loving words, that is friendship.",
    author: "Henry Ward Beecher"
  },
  {
    quote: "Technology has to be invented or adopted.",
    author: "Jared Diamond"
  },
  {
    quote: "The biggest adventure you can ever take is to live the life of your dreams.",
    author: "Oprah Winfrey"
  },
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe"
  },
  {
    quote: "Always bear in mind that your own resolution to succeed is more important than any other.",
    author: "Abraham Lincoln"
  },
  {
    quote: "People take different roads seeking fulfilment and happiness. Just because they're not on your road doesn't mean they've gotten lost.",
    author: "Dalai Lama"
  },
  {
    quote: "Technology made large populations possible; large populations now make technology indispensable.",
    author: "Joseph Wood Krutch"
  },
  {
    quote: "Meditation brings wisdom, lack of meditation leaves ignorance. Know well what leads you forward and what holds you back and choose the path that leads to wisdom.",
    author: "The Buddha"
  },
  {
    quote: "All our talents increase in the using, and every faculty, both good and bad, strengthen by exercise.",
    author: "Anne Brontë"
  },
  {
    quote: "Democracy's premise rests on the notion that the collective wisdom of the majority will prove right more often than it's wrong; that given sufficient opportunity in the pursuit of happiness, your population will develop its talents, its intellect, its better judgment; that over time its capacity for discernment and self-correction will be enlarged.",
    author: "Ben Fountain"
  },
  {
    quote: "Without freedom of thought, there can be no such thing as wisdom - and no such thing as public liberty without freedom of speech.",
    author: "Benjamin Franklin"
  },
  {
    quote: "When we feel love and kindness toward others, it not only makes others feel loved and cared for, but it helps us also to develop inner happiness and peace.",
    author: "Dalai Lama"
  },
  {
    quote: "Be faithful in small things because it is in them that your strength lies.",
    author: "Mother Teresa"
  },
  {
    quote: "There are two primary choices in life: to accept conditions as they exist or accept responsibility for changing them.",
    author: "Denis Waitley"
  },
  {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso"
  },
  {
    quote: "Knowledge has three degrees: opinion, science, illumination. The means or instrument of the first is sense; of the second, dialectic; of the third, intuition.",
    author: "Plotinus"
  },
  {
    quote: "Wisdom consists of the anticipation of consequences.",
    author: "Norman Cousins"
  },
  {
    quote: "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
    author: "Naguib Mahfouz"
  },
  {
    quote: "The free man is he who does not fear to go to the end of his thought.",
    author: "Léon Blum"
  },
  {
    quote: "Let us resolve to be masters, not the victims, of our history, controlling our own destiny without giving way to blind suspicions and emotions.",
    author: "John F. Kennedy"
  },
  {
    quote: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts"
  },
  {
    quote: "Life is so constructed that an event does not, cannot, will not, match the expectation.",
    author: "Charlotte Brontë"
  },
  {
    quote: "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
    author: "Immanuel Kant"
  },
  {
    quote: "Don't believe what your eyes are telling you. All they show is limitation. Look with your understanding, find out what you already know, and you'll see the way to fly.",
    author: "Richard Bach"
  },
  {
    quote: "Wisdom and penetration are the fruit of experience, not the lessons of retirement and leisure. Great necessities call out great virtues.",
    author: "Abigail Adams"
  },
  {
    quote: "If a man does not make new acquaintances as he advances through life, he will soon find himself left alone. A man, sir, should keep his friendship in a constant repair.",
    author: "Samuel Johnson"
  },
  {
    quote: "But the attitude of faith is to let go, and become open to truth, whatever it might turn out to be.",
    author: "Alan Watts"
  },
  {
    quote: "The final proof of greatness lies in being able to endure criticism without resentment.",
    author: "Elbert Hubbard"
  },
  {
    quote: "Cunning... is but the low mimic of wisdom.",
    author: "Plato"
  },
  {
    quote: "Ignorant men don't know what good they hold in their hands until they've flung it away.",
    author: "Sophocles"
  },
  {
    quote: "Never explain - your friends do not need it and your enemies will not believe you anyway.",
    author: "Elbert Hubbard"
  },
  {
    quote: "Our passion is our strength.",
    author: "Billie Armstrong"
  },
  {
    quote: "Use what talents you possess; the woods would be very silent if no birds sang there except those that sang best.",
    author: "Henry van Dyke Jr."
  },
  {
    quote: "You cannot change anything in your life with intention alone, which can become a watered-down, occasional hope that you'll get to tomorrow. Intention without action is useless.",
    author: "Caroline Myss"
  },
  {
    quote: "The noblest worship is to make yourself as good and as just as you can.",
    author: "Isocrates"
  },
  {
    quote: "Technology is the campfire around which we tell our stories.",
    author: "Laurie Anderson"
  },
  {
    quote: "Do not scorn what you have received, nor envy the gains of others. He who envies others does not obtain peace of mind.",
    author: "The Buddha"
  },
  {
    quote: "You can't put a limit on anything. The more you dream, the farther you get.",
    author: "Michael Phelps"
  },
  {
    quote: "It seemed the world was divided into good and bad people. The good ones slept better... while the bad ones seemed to enjoy the waking hours much more.",
    author: "Woody Allen"
  },
  {
    quote: "I am not the first Buddha who came upon Earth, nor shall I be the last. In due time, another Buddha will arise in the world - a Holy One, a supremely enlightened One, endowed with wisdom in conduct, auspicious, knowing the universe, an incomparable leader of men, a master of angels and mortals.",
    author: "The Buddha"
  },
  {
    quote: "One's friends are that part of the human race with which one can be human.",
    author: "George Santayana"
  },
  {
    quote: "Doing nothing is better than being busy doing nothing.",
    author: "Laozi"
  },
  {
    quote: "Some people are born on third base and go through life thinking they hit a triple.",
    author: "Barry Switzer"
  },
  {
    quote: "Trying to sneak a fastball past Hank Aaron is like trying to sneak the sunrise past a rooster.",
    author: "Joe Adcock"
  },
  {
    quote: "The young man knows the rules, but the old man knows the exceptions.",
    author: "Oliver Wendell Holmes Jr."
  },
  {
    quote: "No one has a finer command of language than the person who keeps his mouth shut.",
    author: "Sam Rayburn"
  },
  {
    quote: "Nothing but heaven itself is better than a friend who is really a friend.",
    author: "Plautus"
  },
  {
    quote: "Instead of saying that man is the creature of circumstance, it would be nearer the mark to say that man is the architect of circumstance.",
    author: "Thomas Carlyle"
  },
  {
    quote: "A day of worry is more exhausting than a day of work.",
    author: "John Lubbock"
  },
  {
    quote: "But friendship is precious, not only in the shade, but in the sunshine of life, and thanks to a benevolent arrangement the greater part of life is sunshine.",
    author: "Thomas Jefferson"
  },
  {
    quote: "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
    author: "William Arthur Ward"
  },
  {
    quote: "A true friend freely, advises justly, assists readily, adventures boldly, takes all patiently, defends courageously, and continues a friend unchangeably.",
    author: "William C. Menninger"
  },
  {
    quote: "Where is the Life we have lost in living? Where is the wisdom we have lost in knowledge? Where is the knowledge we have lost in information?",
    author: "George Eliot"
  },
  {
    quote: "Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.",
    author: "Dalai Lama"
  },
  {
    quote: "I hope our wisdom will grow with our power, and teach us, that the less we use our power the greater it will be.",
    author: "Thomas Jefferson"
  },
  {
    quote: "I never teach my pupils. I only attempt to provide the conditions in which they can learn.",
    author: "Albert Einstein"
  },
  {
    quote: "Good actions give strength to ourselves and inspire good actions in others.",
    author: "Plato"
  },
  {
    quote: "Those who are blessed with the most talent don't necessarily outperform everyone else. It's the people with follow-through who excel.",
    author: "Mary Kay Ash"
  },
  {
    quote: "You can't blame gravity for falling in love.",
    author: "Albert Einstein"
  },
  {
    quote: "There are no failures. Just experiences and your reactions to them.",
    author: "Tom Krause"
  },
  {
    quote: "There is some self-interest behind every friendship. There is no friendship without self-interests. This is a bitter truth.",
    author: "Chanakya"
  },
  {
    quote: "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.",
    author: "Julie Morgenstern"
  },
  {
    quote: "Genuine love should first be directed at oneself; if we do not love ourselves, how can we love others?",
    author: "Dalai Lama"
  },
  {
    quote: "If the stars should appear but one night every thousand years how man would marvel and adore.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "The world is but a canvas to the imagination.",
    author: "Henry David Thoreau"
  },
  {
    quote: "It is one of the blessings of old friends that you can afford to be stupid with them.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "So long as a person is capable of self-renewal they are a living being.",
    author: "Henri-Frédéric Amiel"
  },
  {
    quote: "A lot of people give up just before theyre about to make it. You know you never know when that next obstacle is going to be the last one.",
    author: "Chuck Norris"
  },
  {
    quote: "All fixed set patterns are incapable of adaptability or pliability. The truth is outside of all fixed patterns.",
    author: "Bruce Lee"
  },
  {
    quote: "If you don't know where you are going, any road will get you there.",
    author: "Lewis Carroll"
  },
  {
    quote: "A dream is your creative vision for your life in the future. You must break out of your current comfort zone and become comfortable with the unfamiliar and the unknown.",
    author: "Denis Waitley"
  },
  {
    quote: "America's freedom of religion, and freedom from religion, offers every wisdom tradition an opportunity to address our soul-deep needs: Christianity, Judaism, Islam, Buddhism, Hinduism, secular humanism, agnosticism and atheism among others.",
    author: "Parker Palmer"
  },
  {
    quote: "All is flux; nothing stays still.",
    author: "Heraclitus"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "You have to do your own growing no matter how tall your grandfather was.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Those who will play with cats must expect to be scratched.",
    author: "Miguel de Cervantes"
  },
  {
    quote: "Almost everything comes from nothing.",
    author: "Henri-Frédéric Amiel"
  },
  {
    quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    author: "Ayn Rand"
  },
  {
    quote: "It is not in the stars to hold our destiny but in ourselves.",
    author: "William Shakespeare"
  },
  {
    quote: "A man's growth is seen in the successive choirs of his friends",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "By failing to prepare, you are preparing to fail.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Each man has his own vocation; his talent is his call. There is one direction in which all space is open to him.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "I don't believe in failure. It's not failure if you enjoyed the process.",
    author: "Oprah Winfrey"
  },
  {
    quote: "Friendship is the marriage of the soul, and this marriage is liable to divorce.",
    author: "Voltaire"
  },
  {
    quote: "Excellence is not a skill. It is an attitude.",
    author: "Ralph Marston"
  },
  {
    quote: "No work or love will flourish out of guilt, fear, or hollowness of heart, just as no valid plans for the future can be made by those who have no capacity for living now.",
    author: "Alan Watts"
  },
  {
    quote: "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity.",
    author: "Peter Drucker"
  },
  {
    quote: "The higher we are placed, the more humbly we should walk.",
    author: "Cicero"
  },
  {
    quote: "The man of knowledge must be able not only to love his enemies but also to hate his friends.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "The ultimate promise of technology is to make us master of a world that we command by the push of a button.",
    author: "Volker Grassmuck"
  },
  {
    quote: "By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.",
    author: "Laozi"
  },
  {
    quote: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
    author: "Melody Beattie"
  },
  {
    quote: "As we are liberated from our own fear, our presence automatically liberates others.",
    author: "Nelson Mandela"
  },
  {
    quote: "Knowledge speaks, but wisdom listens.",
    author: "Jimi Hendrix"
  },
  {
    quote: "Happiness mainly comes from our own attitude, rather than from external factors.",
    author: "Dalai Lama"
  },
  {
    quote: "Let there be no purpose in friendship save the deepening of the spirit.",
    author: "Kahlil Gibran"
  },
  {
    quote: "To do all that one is able to do, is to be a man; to do all that one would like to do, is to be a god.",
    author: "Napoleon"
  },
  {
    quote: "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.",
    author: "Alfred Tennyson"
  },
  {
    quote: "Decision is a risk rooted in the courage of being free.",
    author: "Paul Tillich"
  },
  {
    quote: "Whoever is happy will make others happy, too.",
    author: "Mark Twain"
  },
  {
    quote: "When you dance, your purpose is not to get to a certain place on the floor. It's to enjoy each step along the way.",
    author: "Wayne Dyer"
  },
  {
    quote: "Never mistake motion for action.",
    author: "Ernest Hemingway"
  },
  {
    quote: "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    author: "Swami Vivekananda"
  },
  {
    quote: "Friendship is an arrangement by which we undertake to exchange small favors for big ones.",
    author: "Montesquieu"
  },
  {
    quote: "Take rest; a field that has rested gives a bountiful crop.",
    author: "Ovid"
  },
  {
    quote: "When I was 40, my doctor advised me that a man in his 40s shouldn't play tennis. I heeded his advice carefully and could hardly wait until I reached 50 to start again.",
    author: "Hugo Black"
  },
  {
    quote: "God gave us the gift of life; it is up to us to give ourselves the gift of living well.",
    author: "Voltaire"
  },
  {
    quote: "Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    quote: "He that respects himself is safe from others; he wears a coat of mail that none can pierce.",
    author: "Henry Wadsworth Longfellow"
  },
  {
    quote: "Does wisdom perhaps appear on the earth as a raven which is inspired by the smell of carrion?",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "No one has ever become poor by giving.",
    author: "Anne Frank"
  },
  {
    quote: "Those who cling to perceptions and views wander the world offending people.",
    author: "The Buddha"
  },
  {
    quote: "It is impossible for a man to learn what he thinks he already knows.",
    author: "Epictetus"
  },
  {
    quote: "Make the most of yourself, for that is all there is of you.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "It is the neglect of timely repair that makes rebuilding necessary.",
    author: "Richard Whately"
  },
  {
    quote: "Don't be dismayed by good-byes. A farewell is necessary before you can meet again. And meeting again, after moments or lifetimes, is certain for those who are friends.",
    author: "Richard Bach"
  },
  {
    quote: "Take no thought of who is right or wrong or who is better than. Be not for or against.",
    author: "Bruce Lee"
  },
  {
    quote: "There is only one success: to be able to spend your life in your own way.",
    author: "Christopher Morley"
  },
  {
    quote: "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.",
    author: "Confucius"
  },
  {
    quote: "Whatever we expect with confidence becomes our own self-fulfilling prophecy.",
    author: "Brian Tracy"
  },
  {
    quote: "Beginning today, treat everyone you meet as if they were going to be dead by midnight. Extend to them all the care, kindness and understanding you can muster, and do it with no thought of any reward. Your life will never be the same again.",
    author: "Og Mandino"
  },
  {
    quote: "When I do good I feel good, when I do bad I feel bad, and that's my religion.",
    author: "Abraham Lincoln"
  },
  {
    quote: "Imagination is the highest kite one can fly.",
    author: "Lauren Bacall"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "A failure is a man who has blundered but is not capable of cashing in on the experience.",
    author: "Elbert Hubbard"
  },
  {
    quote: "It is not wisdom but Authority that makes a law.",
    author: "Thomas Hobbes"
  },
  {
    quote: "There is only one success - to be able to spend your life in your own way.",
    author: "Christopher Morley"
  },
  {
    quote: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy"
  },
  {
    quote: "I am always doing that which I cannot do, in order that I may learn how to do it.",
    author: "Pablo Picasso"
  },
  {
    quote: "What wisdom can you find that is greater than kindness?",
    author: "Jean-Jacques Rousseau"
  },
  {
    quote: "To be aware of a single shortcoming in oneself is more useful than to be aware of a thousand in someone else.",
    author: "Dalai Lama"
  },
  {
    quote: "Know from the rivers in clefts and in crevices: those in small channels flow noisily, the great flow silent. Whatever's not full makes noise. Whatever is full is quiet.",
    author: "The Buddha"
  },
  {
    quote: "Freedom is what you do with what's been done to you.",
    author: "Jean-Paul Sartre"
  },
  {
    quote: "If I were two-faced, would I be wearing this one?",
    author: "Abraham Lincoln"
  },
  {
    quote: "To conquer fear is the beginning of wisdom.",
    author: "Bertrand Russell"
  },
  {
    quote: "Set your goals high, and don't stop till you get there.",
    author: "Bo Jackson"
  },
  {
    quote: "The essence of true friendship is to make allowance for another's little lapses.",
    author: "Ovid"
  },
  {
    quote: "The truest wisdom is a resolute determination.",
    author: "Napoleon"
  },
  {
    quote: "To follow, without halt, one aim: There is the secret of success.",
    author: "Anna Pavlova"
  },
  {
    quote: "True wisdom comes to each of us when we realize how little we understand about life, ourselves, and the world around us.",
    author: "Isocrates"
  },
  {
    quote: "Wisdom has its root in goodness, not goodness its root in wisdom.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "True happiness means forging a strong spirit that is undefeated, no matter how trying our circumstances.",
    author: "Daisaku Ikeda"
  },
  {
    quote: "We can only learn to love by loving.",
    author: "Iris Murdoch"
  },
  {
    quote: "There are people who have money and people who are rich.",
    author: "Coco Chanel"
  },
  {
    quote: "Just as a solid rock is not shaken by the storm, even so the wise are not affected by praise or blame.",
    author: "The Buddha"
  },
  {
    quote: "If you change the way you look at things, the things you look at change.",
    author: "Wayne Dyer"
  },
  {
    quote: "I am building a fire, and everyday I train, I add more fuel. At just the right moment, I light the match.",
    author: "Mia Hamm"
  },
  {
    quote: "People grow through experience if they meet life honestly and courageously. This is how character is built.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.",
    author: "Dalai Lama"
  },
  {
    quote: "Myths which are believed in tend to become true.",
    author: "George Orwell"
  },
  {
    quote: "Nothing in life is so exhilarating as to be shot at without result.",
    author: "Winston Churchill"
  },
  {
    quote: "Friends... they cherish one another's hopes. They are kind to one another's dreams.",
    author: "Henry David Thoreau"
  },
  {
    quote: "Begin, be bold, and venture to be wise.",
    author: "Horace"
  },
  {
    quote: "If I had only known, I would have been a locksmith.",
    author: "Albert Einstein"
  },
  {
    quote: "Where there is great love, there are always miracles.",
    author: "Willa Cather"
  },
  {
    quote: "When you judge another, you do not define them, you define yourself.",
    author: "Wayne Dyer"
  },
  {
    quote: "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.",
    author: "M. Scott Peck"
  },
  {
    quote: "The greatest remedy for anger is delay.",
    author: "Seneca the Younger"
  },
  {
    quote: "Every man is a damn fool for at least five minutes every day; wisdom consists in not exceeding the limit.",
    author: "Elbert Hubbard"
  },
  {
    quote: "Meditate … do not delay, lest you later regret it.",
    author: "The Buddha"
  },
  {
    quote: "Remember that the most valuable antiques are dear old friends.",
    author: "H. Jackson Brown Jr."
  },
  {
    quote: "Yesterday's home runs don't win today's games.",
    author: "Babe Ruth"
  },
  {
    quote: "One must be fond of people and trust them if one is not to make a mess of life.",
    author: "E. M. Forster"
  },
  {
    quote: "There are three faithful friends - an old wife, an old dog, and ready money.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Tragedy is a tool for the living to gain wisdom, not a guide by which to live.",
    author: "Robert F. Kennedy"
  },
  {
    quote: "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
    author: "Maya Angelou"
  },
  {
    quote: "Anything you really want, you can attain, if you really go after it.",
    author: "Wayne Dyer"
  },
  {
    quote: "Always be smarter than the people who hire you.",
    author: "Lena Horne"
  },
  {
    quote: "God has given you one face, and you make yourself another.",
    author: "William Shakespeare"
  },
  {
    quote: "Treat people as if they were what they ought to be, and you help them to become what they are capable of being.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    quote: "Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong.",
    author: "Richard Needham"
  },
  {
    quote: "To lead people walk behind them.",
    author: "Laozi"
  },
  {
    quote: "Sustaining true friendship is a lot more challenging than we give it credit for.",
    author: "Mariella Frostrup"
  },
  {
    quote: "You are the only person on earth who can use your ability.",
    author: "Zig Ziglar"
  },
  {
    quote: "It is unwise to be too sure of one's own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "There are no strangers here; Only friends you haven't yet met.",
    author: "William Butler Yeats"
  },
  {
    quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.",
    author: "Leonardo da Vinci"
  },
  {
    quote: "Subdue your appetites, my dears, and you've conquered human nature.",
    author: "Charles Dickens"
  },
  {
    quote: "Let my skin and sinews and bones dry up, together with all the flesh and blood of my body! I welcome it! But I will not move from this spot until I have attained the supreme and final wisdom.",
    author: "The Buddha"
  },
  {
    quote: "Let yourself be silently drawn by the stronger pull of what you really love.",
    author: "Rumi"
  },
  {
    quote: "The time to repair the roof is when the sun is shining.",
    author: "John F. Kennedy"
  },
  {
    quote: "Things do not happen. Things are made to happen.",
    author: "John F. Kennedy"
  },
  {
    quote: "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Without hard work, nothing grows but weeds.",
    author: "Gordon Hinckley"
  },
  {
    quote: "Let none find fault with others; let none see the omissions and commissions of others. But let one see one's own acts, done and undone.",
    author: "The Buddha"
  },
  {
    quote: "Music is a higher revelation than all wisdom and philosophy.",
    author: "Ludwig van Beethoven"
  },
  {
    quote: "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams, who looks inside, awakes.",
    author: "Carl Jung"
  },
  {
    quote: "If you only have a hammer, you tend to see every problem as a nail.",
    author: "Abraham Maslow"
  },
  {
    quote: "Things turn out best for those who make the best of the way things turn out.",
    author: "Jack Buck"
  },
  {
    quote: "Don't worry about people stealing your ideas. If your ideas are any good, you'll have to ram them down people's throats.",
    author: "Howard H. Aiken"
  },
  {
    quote: "Finding good players is easy. Getting them to play as a team is another story.",
    author: "Casey Stengel"
  },
  {
    quote: "If there is such a thing as a good marriage, it is because it resembles friendship rather than love.",
    author: "Michel de Montaigne"
  },
  {
    quote: "Mistakes are the usual bridge between inexperience and wisdom.",
    author: "Phyllis Grissim-Theroux"
  },
  {
    quote: "Trouble is only opportunity in work clothes.",
    author: "Henry J. Kaiser"
  },
  {
    quote: "But what is liberty without wisdom, and without virtue? It is the greatest of all possible evils; for it is folly, vice, and madness, without tuition or restraint.",
    author: "Edmund Burke"
  },
  {
    quote: "He who has imagination without learning has wings but no feet.",
    author: "Joseph Joubert"
  },
  {
    quote: "We can change our lives. We can do, have, and be exactly what we wish.",
    author: "Tony Robbins"
  },
  {
    quote: "Never deny a diagnosis but do deny the negative verdict that may go with it.",
    author: "Norman Cousins"
  },
  {
    quote: "You were not born a winner, and you were not born a loser. You are what you make yourself be.",
    author: "Lou Holtz"
  },
  {
    quote: "It is only with the heart that one can see rightly, what is essential is invisible to the eye.",
    author: "Antoine de Saint-Exupéry"
  },
  {
    quote: "People ask me what I do in winter when there's no baseball. I'll tell you what I do. I stare out the window and wait for spring.",
    author: "Rogers Hornsby"
  },
  {
    quote: "I gave my life to become the person I am right now. Was it worth it?",
    author: "Richard Bach"
  },
  {
    quote: "Golf is a game in which one endeavors to control a ball with implements ill adapted for the purpose.",
    author: "Woodrow Wilson"
  },
  {
    quote: "Much wisdom often goes with fewest words.",
    author: "Sophocles"
  },
  {
    quote: "Memory is the mother of all wisdom.",
    author: "Samuel Johnson"
  },
  {
    quote: "What do we live for, if it is not to make life less difficult for each other?",
    author: "George Eliot"
  },
  {
    quote: "Mediocrity knows nothing higher than itself, but talent instantly recognizes genius.",
    author: "Arthur Conan Doyle"
  },
  {
    quote: "Of all possessions a friend is the most precious.",
    author: "Herodotus"
  },
  {
    quote: "The greatest danger for most of us is not that our aim is too high, and we miss it, but that it is too low, and we reach it.",
    author: "Michelangelo"
  },
  {
    quote: "If one does not know to which port is sailing, no wind is favorable.",
    author: "Seneca the Younger"
  },
  {
    quote: "Only I can change my life. No one can do it for me.",
    author: "Carol Burnett"
  },
  {
    quote: "Laughter is not at all a bad beginning for a friendship, and it is far the best ending for one.",
    author: "Oscar Wilde"
  },
  {
    quote: "Life's most persistent and urgent question is, 'What are you doing for others?'",
    author: "Martin Luther King Jr."
  },
  {
    quote: "Argue for your limitations, and sure enough they're yours.",
    author: "Richard Bach"
  },
  {
    quote: "One friend in a lifetime is much; two are many; three are hardly possible. Friendship needs a certain parallelism of life, a community of thought, a rivalry of aim.",
    author: "Brooks Adams"
  },
  {
    quote: "To fly as fast as thought, you must begin by knowing that you have already arrived.",
    author: "Richard Bach"
  },
  {
    quote: "It's better to be a lion for a day than a sheep all your life.",
    author: "Elizabeth Kenny"
  },
  {
    quote: "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?",
    author: "Richard Bach"
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.",
    author: "Peter Drucker"
  },
  {
    quote: "Miracles come in moments. Be ready and willing.",
    author: "Wayne Dyer"
  },
  {
    quote: "Things are as they are. Looking out into it the universe at night, we make no comparisons between right and wrong stars, nor between well and badly arranged constellations.",
    author: "Alan Watts"
  },
  {
    quote: "Men of perverse opinion do not know the excellence of what is in their hands, till someone dash it from them.",
    author: "Sophocles"
  },
  {
    quote: "I violated the Noah rule: Predicting rain doesn't count; building arks does.",
    author: "Warren Buffett"
  },
  {
    quote: "People are not lazy. They simply have impotent goals - that is, goals that do not inspire them.",
    author: "Tony Robbins"
  },
  {
    quote: "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.",
    author: "G. K. Chesterton"
  },
  {
    quote: "It is not the possession of truth, but the success which attends the seeking after it, that enriches the seeker and brings happiness to him.",
    author: "Max Planck"
  },
  {
    quote: "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence.",
    author: "Frederick Douglass"
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    quote: "Along with success comes a reputation for wisdom.",
    author: "Euripides"
  },
  {
    quote: "'As I am, so are these. As are these, so am I.' Drawing the parallel to yourself, neither kill nor get others to kill.",
    author: "The Buddha"
  },
  {
    quote: "Learn from yesterday, live for today, hope for tomorrow.",
    author: "Albert Einstein"
  },
  {
    quote: "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.",
    author: "Henry Miller"
  },
  {
    quote: "Belief consists in accepting the affirmations of the soul; Unbelief, in denying them.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Better to have loved and lost, than to have never loved at all.",
    author: "Augustine of Hippo"
  },
  {
    quote: "It takes courage to grow up and become who you really are.",
    author: "E. E. Cummings"
  },
  {
    quote: "Wise men talk because they have something to say; fools, because they have to say something.",
    author: "Plato"
  },
  {
    quote: "I never think of the future. It comes soon enough.",
    author: "Albert Einstein"
  },
  {
    quote: "The trick is in what one emphasizes. We either make ourselves miserable, or we make ourselves happy. The amount of work is the same.",
    author: "Carlos Castaneda"
  },
  {
    quote: "No garden is without its weeds.",
    author: "Thomas Fuller"
  },
  {
    quote: "The beginning of wisdom is found in doubting; by doubting we come to the question, and by seeking we may come upon the truth.",
    author: "Peter Abelard"
  },
  {
    quote: "Until you make peace with who you are, you'll never be content with what you have.",
    author: "Doris Mortman"
  },
  {
    quote: "Through pride we are ever deceiving ourselves. But deep down below the surface of the average conscience a still, small voice says to us, something is out of tune.",
    author: "Carl Jung"
  },
  {
    quote: "When in doubt, tell the truth.",
    author: "Mark Twain"
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King"
  },
  {
    quote: "In the end we retain from our studies only that which we practically apply.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
    author: "Thomas Edison"
  },
  {
    quote: "Just as a flower, which seems beautiful has color but no perfume, so are the fruitless words of a man who speaks them but does them not.",
    author: "Dhammapada"
  },
  {
    quote: "Before we acquire great power, we must acquire wisdom to use it well.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Begin at once to live and count each separate day as a separate life.",
    author: "Seneca the Younger"
  },
  {
    quote: "Always bear in mind that your own resolution to succeed is more important than any one thing.",
    author: "Abraham Lincoln"
  },
  {
    quote: "I hear and I forget. I see and I remember. I do and I understand.",
    author: "Confucius"
  },
  {
    quote: "Good, better, best. Never let it rest. ‘Til your good is better and your better is best.",
    author: "Jerome"
  },
  {
    quote: "A man sees in the world what he carries in his heart.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    quote: "Those that know, do. Those that understand, teach.",
    author: "Aristotle"
  },
  {
    quote: "Your talent is God's gift to you. What you do with it is your gift back to God.",
    author: "Leo Buscaglia"
  },
  {
    quote: "He who lives in harmony with himself lives in harmony with the world.",
    author: "Marcus Aurelius"
  },
  {
    quote: "Friends are those rare people who ask how we are and then wait to hear the answer.",
    author: "Ed Cunningham"
  },
  {
    quote: "Who looks outside, dreams, who looks inside, awakes.",
    author: "Carl Jung"
  },
  {
    quote: "The world turns aside to let any man pass who knows where he is going.",
    author: "Epictetus"
  },
  {
    quote: "A poem begins in delight and ends in wisdom.",
    author: "Robert Frost"
  },
  {
    quote: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn"
  },
  {
    quote: "Follow your instincts. That is where true wisdom manifests itself.",
    author: "Oprah Winfrey"
  },
  {
    quote: "The greatest obstacle to being heroic is the doubt whether one may not be going to prove oneself a fool; the truest heroism is to resist the doubt; and the profoundest wisdom, to know when it ought to be resisted, and when it be obeyed.",
    author: "Nathaniel Hawthorne"
  },
  {
    quote: "Remember always that you not only have the right to be an individual, you have an obligation to be one.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Meditation is the dissolution of thoughts in eternal awareness or Pure consciousness without objectification, knowing without thinking, merging finitude in infinity.",
    author: "Voltaire"
  },
  {
    quote: "Where there is charity and wisdom, there is neither fear nor ignorance.",
    author: "Francis of Assisi"
  },
  {
    quote: "The farther backward you can look, the farther forward you can see.",
    author: "Winston Churchill"
  },
  {
    quote: "It's not what you look at that matters, it's what you see.",
    author: "Henry David Thoreau"
  },
  {
    quote: "Resolutely train yourself to attain peace.",
    author: "The Buddha"
  },
  {
    quote: "Ideas pull the trigger, but instinct loads the gun.",
    author: "Don Marquis"
  },
  {
    quote: "Never put off till tomorrow what you can do today.",
    author: "Thomas Jefferson"
  },
  {
    quote: "Experience keeps a dear school, but fools will learn in no other.",
    author: "Benjamin Franklin"
  },
  {
    quote: "Spectacular achievement is always preceded by unspectacular preparation.",
    author: "Robert Schuller"
  },
  {
    quote: "Give whatever you are doing and whoever you are with the gift of your attention.",
    author: "Jim Rohn"
  },
  {
    quote: "Those who cannot learn from history are doomed to repeat it.",
    author: "George Santayana"
  },
  {
    quote: "We never live; we are always in the expectation of living.",
    author: "Voltaire"
  },
  {
    quote: "It's important to know that words don't move mountains. Work, exacting work moves mountains.",
    author: "Danilo Dolci"
  },
  {
    quote: "Not all those who wander are lost.",
    author: "J. R. R. Tolkien"
  },
  {
    quote: "First say to yourself what you would be; and then do what you have to do.",
    author: "Epictetus"
  },
  {
    quote: "The aim of life is self-development. To realize one's nature perfectly - that is what each of us is here for.",
    author: "Oscar Wilde"
  },
  {
    quote: "Friendship often ends in love, but love in friendship - never.",
    author: "Albert Camus"
  },
  {
    quote: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    author: "Marcus Aurelius"
  }
];
const data = {
  quotes
};
function GET({ url }) {
  const day = Number(url.searchParams.get("day"));
  const quote = data.quotes[day - 1];
  return json(quote);
}

export { GET };
//# sourceMappingURL=_server-7e2843fd.js.map