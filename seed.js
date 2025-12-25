/* ===========================
   Knowledge Vault — Seed Data
=========================== */

const SEED_VAULT = [
  /* 1 */
{
  id: "law_parkinsons",
  category: "LAW",
  title: "Parkinson’s Law",
  essence: "Work expands to fill the time available.",
  explanation: "Parkinson’s Law states that “work expands to fill the time available for its completion.” This means tasks don’t take longer because they are complex, but because we allow them more time than necessary. When deadlines are loose, we subconsciously slow down, overthink, procrastinate, or add unnecessary steps. Tight, well-defined time limits force focus, efficiency, and decision-making, while vague timelines encourage delay and wasted effort.",
  example: "If you give yourself 7 days to write a 2-page assignment, you’ll likely start late and stretch the work. If you give yourself 2 hours, you’ll focus sharply and still finish it well.",
  whenToUse: "It matters when you want to stop procrastinating and get more done in less time",
  warning: "People think Parkinson’s Law means rushing work; it actually means removing unnecessary time, not reducing quality. Tight deadlines can increase clarity, not stress, if chosen intentionally.",
  tags: ["time", "productivity"]
},

/* 2 */
{
  id: "law_pareto",
  category: "LAW",
  title: "Pareto Principle (80/20 Rule)",
  essence: "Most results come from a small portion of effort.",
  explanation: "A small number of causes usually produce most of the effects.",
  example: "20% of habits create 80% of success.",
  whenToUse: "Prioritizing tasks and goals.",
  warning: "The ratio is not always exact.",
  tags: ["focus", "priority"]
},

/* 3 */
{
  id: "law_diminishing_returns",
  category: "LAW",
  title: "Law of Diminishing Returns",
  essence: "More effort gives less benefit after a point.",
  explanation: "After optimal effort, extra input produces smaller or negative results.",
  example: "Studying too long reduces understanding.",
  whenToUse: "Balancing effort and rest.",
  warning: "Stopping too early also causes loss.",
  tags: ["effort", "balance"]
},

/* 4 */
{
  id: "law_murphy",
  category: "LAW",
  title: "Murphy’s Law",
  essence: "Anything that can go wrong might go wrong.",
  explanation: "If risks are ignored, failures will appear at the worst time.",
  example: "Forgetting to save work before a power cut.",
  whenToUse: "Planning and risk management.",
  warning: "Not an excuse for negativity.",
  tags: ["risk", "planning"]
},

/* 5 */
{
  id: "law_hofstadter",
  category: "LAW",
  title: "Hofstadter’s Law",
  essence: "Tasks take longer than expected, even when you plan for it.",
  explanation: "People underestimate complexity, even with experience.",
  example: "A one-week project takes three weeks.",
  whenToUse: "Project estimation.",
  warning: "Avoid over-buffering time.",
  tags: ["time", "projects"]
},

/* 6 */
{
  id: "law_least_effort",
  category: "LAW",
  title: "Law of Least Effort",
  essence: "People choose the easiest path.",
  explanation: "Humans naturally prefer options that require less effort.",
  example: "Scrolling instead of studying.",
  whenToUse: "Designing habits and systems.",
  warning: "Easy paths may limit growth.",
  tags: ["behavior", "habits"]
},

/* 7 */
{
  id: "law_goodhart",
  category: "LAW",
  title: "Goodhart’s Law",
  essence: "When a measure becomes a target, it stops being useful.",
  explanation: "People manipulate metrics once they become goals.",
  example: "Studying for marks instead of learning.",
  whenToUse: "Using metrics and KPIs.",
  warning: "Do not worship numbers.",
  tags: ["metrics", "systems"]
},

/* 8 */
{
  id: "law_broken_windows",
  category: "LAW",
  title: "Broken Windows Theory",
  essence: "Small problems invite bigger problems.",
  explanation: "Visible neglect encourages further disorder.",
  example: "Ignoring small bugs causes system collapse.",
  whenToUse: "Maintaining standards.",
  warning: "Do not confuse strictness with control.",
  tags: ["discipline", "order"]
},

/* 9 */
{
  id: "law_power",
  category: "LAW",
  title: "Power Law",
  essence: "A few things dominate most outcomes.",
  explanation: "Results are unevenly distributed.",
  example: "Few creators get most attention.",
  whenToUse: "Understanding inequality.",
  warning: "Do not expect fairness.",
  tags: ["distribution", "reality"]
},

/* 10 */
{
  id: "law_anchoring",
  category: "LAW",
  title: "Anchoring Effect",
  essence: "First information strongly influences decisions.",
  explanation: "Initial numbers or ideas act as mental anchors.",
  example: "High original price makes discounts attractive.",
  whenToUse: "Negotiations and pricing.",
  warning: "Anchors can mislead.",
  tags: ["decision", "bias"]
},

/* 11 */
{
  id: "law_compounding",
  category: "LAW",
  title: "Law of Compounding",
  essence: "Small actions grow exponentially over time.",
  explanation: "Consistent effort multiplies results.",
  example: "Daily reading builds massive knowledge.",
  whenToUse: "Long-term growth.",
  warning: "Works both positively and negatively.",
  tags: ["growth", "time"]
},

/* 12 */
{
  id: "law_tradeoffs",
  category: "LAW",
  title: "Law of Trade-offs",
  essence: "You cannot optimize everything at once.",
  explanation: "Improving one thing often worsens another.",
  example: "Speed vs quality.",
  whenToUse: "Decision making.",
  warning: "Hidden costs exist.",
  tags: ["choices", "tradeoffs"]
},

/* 13 */
{
  id: "law_irreversibility",
  category: "LAW",
  title: "Law of Irreversibility",
  essence: "Some actions cannot be undone.",
  explanation: "Certain decisions permanently change outcomes.",
  example: "Public reputation damage.",
  whenToUse: "High-stakes decisions.",
  warning: "Think before acting.",
  tags: ["risk", "decisions"]
},

/* 14 */
{
  id: "law_unintended",
  category: "LAW",
  title: "Law of Unintended Consequences",
  essence: "Actions often have unexpected effects.",
  explanation: "Complex systems react unpredictably.",
  example: "Rules causing loopholes.",
  whenToUse: "Policy and system design.",
  warning: "Watch second-order effects.",
  tags: ["systems", "thinking"]
},

/* 15 */
{
  id: "law_feedback_loops",
  category: "LAW",
  title: "Feedback Loop Principle",
  essence: "Outputs influence future inputs.",
  explanation: "Positive loops amplify, negative loops stabilize.",
  example: "Confidence improves performance.",
  whenToUse: "Habit formation.",
  warning: "Bad loops are dangerous.",
  tags: ["systems", "habits"]
},

/* 16 */
{
  id: "law_necessity",
  category: "LAW",
  title: "Necessity Is the Mother of Invention",
  essence: "Pressure drives creativity.",
  explanation: "Constraints force innovation.",
  example: "Limited resources create smarter solutions.",
  whenToUse: "Problem solving.",
  warning: "Too much pressure breaks people.",
  tags: ["creativity", "pressure"]
},

/* 17 */
{
  id: "law_availability",
  category: "LAW",
  title: "Availability Heuristic",
  essence: "We judge based on what comes to mind easily.",
  explanation: "Recent or vivid events feel more important.",
  example: "Fear of flying after hearing news.",
  whenToUse: "Risk assessment.",
  warning: "Memory is biased.",
  tags: ["bias", "thinking"]
},

/* 18 */
{
  id: "law_inertia",
  category: "LAW",
  title: "Law of Inertia",
  essence: "Objects resist change.",
  explanation: "People and systems resist change unless forced.",
  example: "Staying in bad habits.",
  whenToUse: "Change management.",
  warning: "Force causes backlash.",
  tags: ["change", "behavior"]
},

/* 19 */
{
  id: "law_substitution",
  category: "LAW",
  title: "Substitution Effect",
  essence: "People replace effort with easier answers.",
  explanation: "Hard questions get replaced with simple ones.",
  example: "Judging by looks instead of facts.",
  whenToUse: "Critical thinking.",
  warning: "Leads to wrong conclusions.",
  tags: ["thinking", "bias"]
},

/* 20 */
{
  id: "law_sunk_cost",
  category: "LAW",
  title: "Sunk Cost Fallacy",
  essence: "Past costs wrongly affect decisions.",
  explanation: "People continue bad choices to justify past effort.",
  example: "Staying in a failing project.",
  whenToUse: "Decision review.",
  warning: "Ignore irrecoverable costs.",
  tags: ["decisions", "psychology"]
},
/* 1 */
{
  id: "model_second_order",
  category: "MODEL",
  title: "Second-Order Thinking",
  essence: "Think beyond immediate results.",
  explanation: "Good decisions consider not just what happens now, but what happens after that.",
  example: "Lowering prices boosts sales short-term but may hurt brand value later.",
  whenToUse: "Strategic decisions.",
  warning: "Avoid overthinking every small choice.",
  tags: ["strategy", "thinking"]
},

/* 2 */
{
  id: "model_inversion",
  category: "MODEL",
  title: "Inversion",
  essence: "Avoid failure instead of chasing success.",
  explanation: "Instead of asking how to succeed, ask what causes failure and avoid it.",
  example: "Removing distractions instead of chasing motivation.",
  whenToUse: "Problem solving.",
  warning: "Balance with forward goals.",
  tags: ["problem", "logic"]
},

/* 3 */
{
  id: "model_first_principles",
  category: "MODEL",
  title: "First Principles Thinking",
  essence: "Break problems down to basics.",
  explanation: "Remove assumptions and rebuild from fundamental truths.",
  example: "Learning concepts instead of memorizing formulas.",
  whenToUse: "Complex problems.",
  warning: "Time-consuming for small tasks.",
  tags: ["thinking", "clarity"]
},

/* 4 */
{
  id: "model_opportunity_cost",
  category: "MODEL",
  title: "Opportunity Cost",
  essence: "Every choice means giving up another.",
  explanation: "The real cost of a decision is the next best option you didn’t choose.",
  example: "Studying instead of socializing.",
  whenToUse: "Prioritization.",
  warning: "Some costs are hidden.",
  tags: ["decisions", "tradeoff"]
},

/* 5 */
{
  id: "model_margin_safety",
  category: "MODEL",
  title: "Margin of Safety",
  essence: "Leave room for error.",
  explanation: "Build buffers to protect against uncertainty.",
  example: "Saving extra money for emergencies.",
  whenToUse: "Risk management.",
  warning: "Too much caution slows progress.",
  tags: ["risk", "planning"]
},

/* 6 */
{
  id: "model_compounding",
  category: "MODEL",
  title: "Compounding",
  essence: "Small actions grow exponentially.",
  explanation: "Consistent effort over time creates massive results.",
  example: "Daily reading builds deep knowledge.",
  whenToUse: "Long-term growth.",
  warning: "Negative habits compound too.",
  tags: ["growth", "time"]
},

/* 7 */
{
  id: "model_feedback_loops",
  category: "MODEL",
  title: "Feedback Loops",
  essence: "Outputs influence future inputs.",
  explanation: "Positive loops amplify results; negative loops stabilize systems.",
  example: "Confidence improves performance, which boosts confidence.",
  whenToUse: "Habit building.",
  warning: "Bad loops escalate quickly.",
  tags: ["systems", "habits"]
},

/* 8 */
{
  id: "model_leverage",
  category: "MODEL",
  title: "Leverage",
  essence: "Small input, big output.",
  explanation: "Some actions multiply results far more than others.",
  example: "Automation saving hours of work.",
  whenToUse: "Efficiency improvement.",
  warning: "Wrong leverage causes damage.",
  tags: ["efficiency", "power"]
},

/* 9 */
{
  id: "model_bottleneck",
  category: "MODEL",
  title: "Bottleneck Analysis",
  essence: "A system moves as fast as its slowest part.",
  explanation: "Identify and improve the main constraint.",
  example: "Slow approval delays entire project.",
  whenToUse: "Process improvement.",
  warning: "Fixing the wrong part wastes effort.",
  tags: ["systems", "optimization"]
},

/* 10 */
{
  id: "model_map_territory",
  category: "MODEL",
  title: "Map vs Territory",
  essence: "Models are not reality.",
  explanation: "Representations simplify reality but are never perfect.",
  example: "Job titles don’t show real skill.",
  whenToUse: "Avoiding assumptions.",
  warning: "Mistaking model for truth.",
  tags: ["reality", "thinking"]
},

/* 11 */
{
  id: "model_probabilistic",
  category: "MODEL",
  title: "Probabilistic Thinking",
  essence: "Think in chances, not certainties.",
  explanation: "Most outcomes are uncertain, not guaranteed.",
  example: "Assessing risk instead of yes/no thinking.",
  whenToUse: "Risk decisions.",
  warning: "Humans prefer certainty.",
  tags: ["probability", "risk"]
},

/* 12 */
{
  id: "model_regret_minimization",
  category: "MODEL",
  title: "Regret Minimization",
  essence: "Choose what you’ll regret least later.",
  explanation: "Decide based on long-term satisfaction.",
  example: "Trying something instead of wondering forever.",
  whenToUse: "Major life decisions.",
  warning: "Emotion still plays a role.",
  tags: ["life", "choices"]
},

/* 13 */
{
  id: "model_mental_accounting",
  category: "MODEL",
  title: "Mental Accounting",
  essence: "We treat money differently based on labels.",
  explanation: "People separate money into categories irrationally.",
  example: "Spending bonuses recklessly.",
  whenToUse: "Financial awareness.",
  warning: "Money is fungible.",
  tags: ["finance", "bias"]
},

/* 14 */
{
  id: "model_law_large_numbers",
  category: "MODEL",
  title: "Law of Large Numbers",
  essence: "Averages stabilize with more data.",
  explanation: "Large samples give more reliable results.",
  example: "Long-term investment returns.",
  whenToUse: "Data analysis.",
  warning: "Small samples mislead.",
  tags: ["statistics", "data"]
},

/* 15 */
{
  id: "model_survivorship",
  category: "MODEL",
  title: "Survivorship Bias",
  essence: "We notice winners, not failures.",
  explanation: "Visible success hides unseen failures.",
  example: "Only hearing startup success stories.",
  whenToUse: "Learning from examples.",
  warning: "Missing the full picture.",
  tags: ["bias", "learning"]
},

/* 16 */
{
  id: "model_reversion_mean",
  category: "MODEL",
  title: "Regression to the Mean",
  essence: "Extreme outcomes tend to normalize.",
  explanation: "Unusual results often return to average.",
  example: "Bad days followed by normal days.",
  whenToUse: "Performance evaluation.",
  warning: "Don’t overreact to extremes.",
  tags: ["statistics", "behavior"]
},

/* 17 */
{
  id: "model_antifragile",
  category: "MODEL",
  title: "Antifragility",
  essence: "Some things grow from stress.",
  explanation: "Systems can improve through volatility.",
  example: "Muscles growing after exercise.",
  whenToUse: "Resilience building.",
  warning: "Not all stress is good.",
  tags: ["resilience", "growth"]
},

/* 18 */
{
  id: "model_scale",
  category: "MODEL",
  title: "Scale",
  essence: "What works small may fail big.",
  explanation: "Systems behave differently as they grow.",
  example: "Small teams vs large organizations.",
  whenToUse: "Growth planning.",
  warning: "Scaling exposes weaknesses.",
  tags: ["growth", "systems"]
},

/* 19 */
{
  id: "model_tradeoffs",
  category: "MODEL",
  title: "Trade-Off Thinking",
  essence: "Every gain has a cost.",
  explanation: "Optimizing one area sacrifices another.",
  example: "Speed vs accuracy.",
  whenToUse: "Decision making.",
  warning: "Hidden costs exist.",
  tags: ["choices", "balance"]
},

/* 20 */
{
  id: "model_optional",
  category: "MODEL",
  title: "Optionality",
  essence: "Keep choices open.",
  explanation: "Options increase flexibility and upside.",
  example: "Learning multiple skills.",
  whenToUse: "Uncertain environments.",
  warning: "Too many options cause paralysis.",
  tags: ["flexibility", "strategy"]
},
/* 1 */
{
  id: "philo_stoicism",
  category: "PHILOSOPHY",
  title: "Stoicism",
  essence: "Control your response, not external events.",
  explanation: "Stoicism teaches that peace comes from focusing on what you can control and accepting what you cannot.",
  example: "Not getting angry over insults or delays.",
  whenToUse: "Stress, anger, and difficult situations.",
  warning: "Not about suppressing emotions.",
  tags: ["resilience", "control"]
},

/* 2 */
{
  id: "philo_vedanta",
  category: "PHILOSOPHY",
  title: "Vedanta",
  essence: "You are not the body or the mind.",
  explanation: "Vedanta says the true self is pure awareness, separate from thoughts, emotions, and ego.",
  example: "Observing thoughts without identifying with them.",
  whenToUse: "Identity confusion and inner peace.",
  warning: "Requires deep self-inquiry.",
  tags: ["india", "self"]
},

/* 3 */
{
  id: "philo_karma_yoga",
  category: "PHILOSOPHY",
  title: "Karma Yoga (Bhagavad Gita)",
  essence: "Act without attachment to results.",
  explanation: "Do your duty sincerely but let go of obsession with outcomes.",
  example: "Working hard without craving praise or reward.",
  whenToUse: "Work stress and burnout.",
  warning: "Not an excuse for laziness.",
  tags: ["gita", "action"]
},

/* 4 */
{
  id: "philo_bhakti",
  category: "PHILOSOPHY",
  title: "Bhakti Yoga",
  essence: "Devotion purifies the mind.",
  explanation: "Love and devotion reduce ego and bring emotional stability.",
  example: "Finding peace through prayer or surrender.",
  whenToUse: "Emotional pain or loneliness.",
  warning: "Blind faith can be dangerous.",
  tags: ["india", "devotion"]
},

/* 5 */
{
  id: "philo_raja_yoga",
  category: "PHILOSOPHY",
  title: "Raja Yoga",
  essence: "Master the mind through discipline.",
  explanation: "Mental control through meditation, ethics, and focus.",
  example: "Daily meditation practice.",
  whenToUse: "Mental clarity and focus.",
  warning: "Progress is slow and requires patience.",
  tags: ["meditation", "discipline"]
},

/* 6 */
{
  id: "philo_buddhism",
  category: "PHILOSOPHY",
  title: "Buddhism",
  essence: "Attachment causes suffering.",
  explanation: "Desire and attachment lead to suffering; awareness frees the mind.",
  example: "Letting go of constant craving.",
  whenToUse: "Emotional suffering.",
  warning: "Detachment is not indifference.",
  tags: ["buddhism", "mindfulness"]
},

/* 7 */
{
  id: "philo_middle_path",
  category: "PHILOSOPHY",
  title: "The Middle Path",
  essence: "Avoid extremes.",
  explanation: "Balance between pleasure and strict denial leads to clarity.",
  example: "Healthy lifestyle without excess.",
  whenToUse: "Lifestyle choices.",
  warning: "Balance is personal.",
  tags: ["balance", "buddhism"]
},

/* 8 */
{
  id: "philo_chanakya_niti",
  category: "PHILOSOPHY",
  title: "Chanakya Niti",
  essence: "Wisdom is power.",
  explanation: "Chanakya emphasized realism, strategy, and self-interest in governance and life.",
  example: "Thinking strategically instead of emotionally.",
  whenToUse: "Leadership and survival.",
  warning: "Can feel harsh if misunderstood.",
  tags: ["india", "strategy"]
},

/* 9 */
{
  id: "philo_existentialism",
  category: "PHILOSOPHY",
  title: "Existentialism",
  essence: "Meaning is created, not given.",
  explanation: "Life has no fixed meaning; you define it through choices.",
  example: "Choosing values despite uncertainty.",
  whenToUse: "Purpose and identity crises.",
  warning: "Can feel overwhelming.",
  tags: ["meaning", "freedom"]
},

/* 10 */
{
  id: "philo_absurdism",
  category: "PHILOSOPHY",
  title: "Absurdism",
  essence: "Life is irrational, live anyway.",
  explanation: "The search for meaning conflicts with a meaningless universe.",
  example: "Finding joy despite chaos.",
  whenToUse: "Facing life’s contradictions.",
  warning: "Not nihilism.",
  tags: ["absurd", "life"]
},

/* 11 */
{
  id: "philo_nihilism",
  category: "PHILOSOPHY",
  title: "Nihilism",
  essence: "Nothing has inherent meaning.",
  explanation: "Traditional values and meanings are questioned or rejected.",
  example: "Questioning social rules.",
  whenToUse: "Breaking illusions.",
  warning: "Can lead to despair.",
  tags: ["meaning", "void"]
},

/* 12 */
{
  id: "philo_utilitarianism",
  category: "PHILOSOPHY",
  title: "Utilitarianism",
  essence: "Maximize overall happiness.",
  explanation: "Actions are right if they benefit the majority.",
  example: "Policies helping most people.",
  whenToUse: "Ethical decisions.",
  warning: "Can ignore individual suffering.",
  tags: ["ethics", "decision"]
},

/* 13 */
{
  id: "philo_deontology",
  category: "PHILOSOPHY",
  title: "Deontology",
  essence: "Duty matters more than outcome.",
  explanation: "Actions are right or wrong regardless of results.",
  example: "Telling truth even when harmful.",
  whenToUse: "Moral dilemmas.",
  warning: "Can be rigid.",
  tags: ["ethics", "duty"]
},

/* 14 */
{
  id: "philo_virtue_ethics",
  category: "PHILOSOPHY",
  title: "Virtue Ethics",
  essence: "Character matters more than rules.",
  explanation: "Focus on becoming a good person rather than following rules.",
  example: "Choosing honesty naturally.",
  whenToUse: "Personal growth.",
  warning: "Virtues vary culturally.",
  tags: ["character", "ethics"]
},

/* 15 */
{
  id: "philo_non_duality",
  category: "PHILOSOPHY",
  title: "Non-Duality (Advaita)",
  essence: "There is no separation.",
  explanation: "Observer and observed are not separate.",
  example: "Feeling unity with surroundings.",
  whenToUse: "Deep meditation.",
  warning: "Hard to grasp intellectually.",
  tags: ["advaita", "consciousness"]
},

/* 16 */
{
  id: "philo_impermanence",
  category: "PHILOSOPHY",
  title: "Impermanence",
  essence: "Everything changes.",
  explanation: "Nothing is permanent; attachment causes suffering.",
  example: "Accepting life transitions.",
  whenToUse: "Grief and change.",
  warning: "Not pessimism.",
  tags: ["change", "buddhism"]
},

/* 17 */
{
  id: "philo_detachment",
  category: "PHILOSOPHY",
  title: "Detachment",
  essence: "Freedom comes from non-attachment.",
  explanation: "Clinging creates suffering; letting go creates peace.",
  example: "Not tying self-worth to outcomes.",
  whenToUse: "Emotional balance.",
  warning: "Not emotional numbness.",
  tags: ["freedom", "mind"]
},

/* 18 */
{
  id: "philo_samsara",
  category: "PHILOSOPHY",
  title: "Samsara",
  essence: "Cycle of desire and suffering.",
  explanation: "Repetitive patterns of craving lead to rebirth of suffering.",
  example: "Repeating toxic habits.",
  whenToUse: "Breaking cycles.",
  warning: "Metaphorical understanding is enough.",
  tags: ["india", "cycle"]
},

/* 19 */
{
  id: "philo_moksha",
  category: "PHILOSOPHY",
  title: "Moksha",
  essence: "Liberation from suffering.",
  explanation: "Freedom from ignorance and attachment.",
  example: "Living without fear or craving.",
  whenToUse: "Spiritual inquiry.",
  warning: "Not escapism.",
  tags: ["liberation", "india"]
},

/* 20 */
{
  id: "philo_meaningful_life",
  category: "PHILOSOPHY",
  title: "The Meaningful Life",
  essence: "Meaning comes from values, not pleasure.",
  explanation: "A meaningful life focuses on purpose, responsibility, and contribution.",
  example: "Serving others through work.",
  whenToUse: "Life direction.",
  warning: "Meaning requires effort.",
  tags: ["purpose", "life"]
},
/* 1 */
{
  id: "psych_confirmation_bias",
  category: "PSYCHOLOGY",
  title: "Confirmation Bias",
  essence: "We prefer information that confirms our beliefs.",
  explanation: "The mind naturally looks for evidence that supports what it already believes and ignores opposing views.",
  example: "Only reading news that matches your opinion.",
  whenToUse: "Decision making and debates.",
  warning: "Leads to blind spots and poor judgment.",
  tags: ["bias", "thinking"]
},

/* 2 */
{
  id: "psych_dunning_kruger",
  category: "PSYCHOLOGY",
  title: "Dunning–Kruger Effect",
  essence: "Low skill often creates high confidence.",
  explanation: "People with limited knowledge overestimate their ability because they lack awareness of what they don’t know.",
  example: "A beginner thinking they have mastered a skill.",
  whenToUse: "Self-evaluation and learning.",
  warning: "Overconfidence blocks growth.",
  tags: ["ego", "learning"]
},

/* 3 */
{
  id: "psych_loss_aversion",
  category: "PSYCHOLOGY",
  title: "Loss Aversion",
  essence: "Loss hurts more than gain feels good.",
  explanation: "People strongly prefer avoiding losses rather than gaining something of equal value.",
  example: "Not selling a losing stock hoping it recovers.",
  whenToUse: "Financial and life decisions.",
  warning: "Can trap you in bad situations.",
  tags: ["emotion", "risk"]
},

/* 4 */
{
  id: "psych_hedonic_adaptation",
  category: "PSYCHOLOGY",
  title: "Hedonic Adaptation",
  essence: "We get used to pleasure quickly.",
  explanation: "After positive or negative events, happiness returns to a baseline level.",
  example: "New phone excitement fades after weeks.",
  whenToUse: "Managing expectations and happiness.",
  warning: "Chasing pleasure endlessly fails.",
  tags: ["happiness", "mind"]
},

/* 5 */
{
  id: "psych_availability_heuristic",
  category: "PSYCHOLOGY",
  title: "Availability Heuristic",
  essence: "We judge based on what we remember easily.",
  explanation: "Events that are vivid or recent feel more common than they actually are.",
  example: "Fear of flying after hearing crash news.",
  whenToUse: "Risk assessment.",
  warning: "Memory is biased, not factual.",
  tags: ["bias", "risk"]
},

/* 6 */
{
  id: "psych_negativity_bias",
  category: "PSYCHOLOGY",
  title: "Negativity Bias",
  essence: "Negative experiences affect us more strongly.",
  explanation: "The brain gives more weight to negative events than positive ones.",
  example: "One insult ruins an entire day.",
  whenToUse: "Emotional awareness.",
  warning: "Can distort reality.",
  tags: ["emotion", "mind"]
},

/* 7 */
{
  id: "psych_social_proof",
  category: "PSYCHOLOGY",
  title: "Social Proof",
  essence: "We copy what others do.",
  explanation: "People assume that popular behavior is correct behavior.",
  example: "Buying a product because many others did.",
  whenToUse: "Understanding influence.",
  warning: "Crowds can be wrong.",
  tags: ["influence", "behavior"]
},

/* 8 */
{
  id: "psych_authority_bias",
  category: "PSYCHOLOGY",
  title: "Authority Bias",
  essence: "We trust authority figures too easily.",
  explanation: "People tend to obey or believe authority even when wrong.",
  example: "Believing something because an expert said it.",
  whenToUse: "Evaluating advice.",
  warning: "Authority does not equal truth.",
  tags: ["power", "bias"]
},

/* 9 */
{
  id: "psych_self_serving",
  category: "PSYCHOLOGY",
  title: "Self-Serving Bias",
  essence: "We credit success to ourselves and blame failure on others.",
  explanation: "The mind protects ego by shifting responsibility.",
  example: "Blaming luck for failure but skill for success.",
  whenToUse: "Self-reflection.",
  warning: "Blocks accountability.",
  tags: ["ego", "behavior"]
},

/* 10 */
{
  id: "psych_projection",
  category: "PSYCHOLOGY",
  title: "Psychological Projection",
  essence: "We project our traits onto others.",
  explanation: "People assume others think or feel the same way they do.",
  example: "Accusing others of dishonesty while being dishonest.",
  whenToUse: "Conflict resolution.",
  warning: "Creates misunderstanding.",
  tags: ["emotion", "relationships"]
},

/* 11 */
{
  id: "psych_cognitive_dissonance",
  category: "PSYCHOLOGY",
  title: "Cognitive Dissonance",
  essence: "Mental discomfort from conflicting beliefs.",
  explanation: "People change beliefs to reduce inner conflict.",
  example: "Justifying bad habits.",
  whenToUse: "Behavior change.",
  warning: "Rationalization hides truth.",
  tags: ["beliefs", "mind"]
},

/* 12 */
{
  id: "psych_illusion_control",
  category: "PSYCHOLOGY",
  title: "Illusion of Control",
  essence: "We overestimate control over events.",
  explanation: "People believe they influence outcomes they don’t.",
  example: "Lucky rituals before exams.",
  whenToUse: "Decision realism.",
  warning: "Creates false confidence.",
  tags: ["control", "bias"]
},

/* 13 */
{
  id: "psych_fundamental_error",
  category: "PSYCHOLOGY",
  title: "Fundamental Attribution Error",
  essence: "We judge others harshly, ourselves softly.",
  explanation: "We blame character for others’ mistakes but circumstances for our own.",
  example: "Calling others lazy but excusing yourself.",
  whenToUse: "Judging people.",
  warning: "Damages empathy.",
  tags: ["judgment", "relationships"]
},

/* 14 */
{
  id: "psych_placebo",
  category: "PSYCHOLOGY",
  title: "Placebo Effect",
  essence: "Belief itself can change outcomes.",
  explanation: "Expectation can produce real physical or mental effects.",
  example: "Feeling better after a sugar pill.",
  whenToUse: "Mind–body understanding.",
  warning: "Does not replace real treatment.",
  tags: ["belief", "health"]
},

/* 15 */
{
  id: "psych_nocebo",
  category: "PSYCHOLOGY",
  title: "Nocebo Effect",
  essence: "Negative belief creates negative outcomes.",
  explanation: "Expectation of harm can cause real harm.",
  example: "Feeling sick after reading side effects.",
  whenToUse: "Managing anxiety.",
  warning: "Fear can worsen conditions.",
  tags: ["belief", "emotion"]
},

/* 16 */
{
  id: "psych_framing",
  category: "PSYCHOLOGY",
  title: "Framing Effect",
  essence: "Presentation changes perception.",
  explanation: "People react differently depending on how information is framed.",
  example: "90% success sounds better than 10% failure.",
  whenToUse: "Communication and persuasion.",
  warning: "Can manipulate decisions.",
  tags: ["communication", "bias"]
},

/* 17 */
{
  id: "psych_reactance",
  category: "PSYCHOLOGY",
  title: "Psychological Reactance",
  essence: "We resist when freedom feels threatened.",
  explanation: "Restrictions increase desire for forbidden actions.",
  example: "Wanting something more when told not to.",
  whenToUse: "Influence awareness.",
  warning: "Force backfires.",
  tags: ["behavior", "control"]
},

/* 18 */
{
  id: "psych_sunk_cost",
  category: "PSYCHOLOGY",
  title: "Sunk Cost Fallacy",
  essence: "Past investment distorts decisions.",
  explanation: "People continue bad choices to justify past effort.",
  example: "Staying in a failing relationship.",
  whenToUse: "Decision correction.",
  warning: "Past cost is irrelevant.",
  tags: ["decisions", "emotion"]
},

/* 19 */
{
  id: "psych_peak_end",
  category: "PSYCHOLOGY",
  title: "Peak-End Rule",
  essence: "We judge experiences by peak and end.",
  explanation: "Memory favors the strongest moment and the ending.",
  example: "Remembering vacations by highlights.",
  whenToUse: "Experience design.",
  warning: "Memory ≠ reality.",
  tags: ["memory", "experience"]
},

/* 20 */
{
  id: "psych_emotional_contagion",
  category: "PSYCHOLOGY",
  title: "Emotional Contagion",
  essence: "Emotions spread between people.",
  explanation: "Humans unconsciously copy emotional states.",
  example: "Feeling stressed around anxious people.",
  whenToUse: "Environment awareness.",
  warning: "Protect your mental space.",
  tags: ["emotion", "social"]
},
   {
  id: "neuro_neuroplasticity",
  category: "NEUROSCIENCE",
  title: "Neuroplasticity",
  essence: "The brain can change itself.",
  explanation: "Neuroplasticity is the brain’s ability to rewire connections based on experience, learning, and repetition.",
  example: "Practicing a skill daily strengthens related neural pathways.",
  whenToUse: "Learning, habit change, recovery.",
  warning: "What you repeat, good or bad, gets reinforced.",
  tags: ["learning", "habits"]
},

{
  id: "neuro_synaptic_pruning",
  category: "NEUROSCIENCE",
  title: "Synaptic Pruning",
  essence: "Unused connections are removed.",
  explanation: "The brain removes weak or unused neural connections to become more efficient.",
  example: "Skills you stop using slowly fade.",
  whenToUse: "Skill maintenance awareness.",
  warning: "Neglect leads to loss.",
  tags: ["memory", "learning"]
},

{
  id: "neuro_dopamine",
  category: "NEUROSCIENCE",
  title: "Dopamine Reward System",
  essence: "Motivation chemical, not pleasure.",
  explanation: "Dopamine drives anticipation and motivation, not happiness itself.",
  example: "Scrolling feels addictive because of anticipation.",
  whenToUse: "Understanding addiction and habits.",
  warning: "Overstimulation reduces motivation.",
  tags: ["motivation", "addiction"]
},

{
  id: "neuro_hedonic_adaptation",
  category: "NEUROSCIENCE",
  title: "Hedonic Adaptation",
  essence: "The brain gets used to pleasure.",
  explanation: "Repeated rewards lose emotional impact over time.",
  example: "New phone excitement fades quickly.",
  whenToUse: "Managing expectations.",
  warning: "Chasing pleasure never ends satisfaction.",
  tags: ["emotion", "happiness"]
},

{
  id: "neuro_amygdala",
  category: "NEUROSCIENCE",
  title: "Amygdala Hijack",
  essence: "Emotion overrides logic.",
  explanation: "Strong emotions temporarily reduce rational thinking.",
  example: "Saying things you regret when angry.",
  whenToUse: "Conflict and stress situations.",
  warning: "Pause before reacting.",
  tags: ["emotion", "control"]
},

{
  id: "neuro_prefrontal_cortex",
  category: "NEUROSCIENCE",
  title: "Prefrontal Cortex",
  essence: "The brain’s control center.",
  explanation: "Handles planning, decision-making, and impulse control.",
  example: "Resisting temptation requires PFC effort.",
  whenToUse: "Self-discipline.",
  warning: "Stress weakens it.",
  tags: ["decision", "discipline"]
},

{
  id: "neuro_default_mode",
  category: "NEUROSCIENCE",
  title: "Default Mode Network",
  essence: "The wandering mind.",
  explanation: "Activated during rest, self-reflection, and daydreaming.",
  example: "Thinking deeply in silence.",
  whenToUse: "Creativity and reflection.",
  warning: "Overactivity fuels rumination.",
  tags: ["thinking", "self"]
},

{
  id: "neuro_attention_limited",
  category: "NEUROSCIENCE",
  title: "Limited Attention",
  essence: "Attention is finite.",
  explanation: "The brain cannot truly multitask; it switches rapidly.",
  example: "Performance drops while multitasking.",
  whenToUse: "Focus work.",
  warning: "Distractions drain mental energy.",
  tags: ["focus", "productivity"]
},

{
  id: "neuro_long_term_potentiation",
  category: "NEUROSCIENCE",
  title: "Long-Term Potentiation",
  essence: "Memory through repetition.",
  explanation: "Repeated stimulation strengthens synapses.",
  example: "Revision improves recall.",
  whenToUse: "Studying and practice.",
  warning: "Cramming is weaker than spacing.",
  tags: ["memory", "learning"]
},

{
  id: "neuro_stress_cortisol",
  category: "NEUROSCIENCE",
  title: "Cortisol & Stress",
  essence: "Chronic stress harms cognition.",
  explanation: "Long-term cortisol impairs memory and decision-making.",
  example: "Burnout reduces thinking clarity.",
  whenToUse: "Stress management.",
  warning: "Rest is not optional.",
  tags: ["stress", "health"]
},

{
  id: "neuro_sleep_memory",
  category: "NEUROSCIENCE",
  title: "Sleep & Memory Consolidation",
  essence: "Sleep locks learning.",
  explanation: "The brain strengthens memories during sleep.",
  example: "Studying before sleep improves retention.",
  whenToUse: "Learning routines.",
  warning: "Sleep deprivation blocks growth.",
  tags: ["sleep", "memory"]
},

{
  id: "neuro_mirror_neurons",
  category: "NEUROSCIENCE",
  title: "Mirror Neurons",
  essence: "We learn by observing.",
  explanation: "These neurons activate when watching others act.",
  example: "Learning skills by watching experts.",
  whenToUse: "Social learning.",
  warning: "Environment shapes behavior.",
  tags: ["learning", "social"]
},

{
  id: "neuro_prediction_brain",
  category: "NEUROSCIENCE",
  title: "Predictive Brain",
  essence: "The brain predicts reality.",
  explanation: "The brain constantly predicts outcomes to save energy.",
  example: "Surprises feel intense.",
  whenToUse: "Understanding bias.",
  warning: "Predictions can be wrong.",
  tags: ["perception", "bias"]
},

{
  id: "neuro_emotional_memory",
  category: "NEUROSCIENCE",
  title: "Emotionally Charged Memory",
  essence: "Emotion strengthens memory.",
  explanation: "Emotional events are remembered more vividly.",
  example: "Traumatic or joyful memories lasting longer.",
  whenToUse: "Teaching and storytelling.",
  warning: "Emotions distort accuracy.",
  tags: ["memory", "emotion"]
},

{
  id: "neuro_decision_fatigue",
  category: "NEUROSCIENCE",
  title: "Decision Fatigue",
  essence: "Decisions drain mental energy.",
  explanation: "Repeated choices reduce decision quality.",
  example: "Poor decisions late in the day.",
  whenToUse: "Planning routines.",
  warning: "Simplify choices.",
  tags: ["decision", "energy"]
},

{
  id: "neuro_homeostasis",
  category: "NEUROSCIENCE",
  title: "Homeostasis",
  essence: "The brain seeks balance.",
  explanation: "Neural systems try to maintain stability.",
  example: "Mood regulation after stress.",
  whenToUse: "Mental health awareness.",
  warning: "Extreme habits disrupt balance.",
  tags: ["balance", "health"]
},

{
  id: "neuro_learning_styles_myth",
  category: "NEUROSCIENCE",
  title: "Learning Styles Myth",
  essence: "The brain learns through multiple modes.",
  explanation: "No fixed learning style exists; variety improves learning.",
  example: "Combining reading, writing, and practice.",
  whenToUse: "Effective studying.",
  warning: "Labels limit growth.",
  tags: ["learning", "myth"]
},

{
  id: "neuro_emotion_cognition_loop",
  category: "NEUROSCIENCE",
  title: "Emotion–Cognition Loop",
  essence: "Thoughts and emotions influence each other.",
  explanation: "Emotions shape thinking; thinking shapes emotions.",
  example: "Negative thoughts increase anxiety.",
  whenToUse: "Self-awareness.",
  warning: "Unchecked loops escalate.",
  tags: ["emotion", "thinking"]
},

{
  id: "neuro_brain_energy",
  category: "NEUROSCIENCE",
  title: "Brain Energy Budget",
  essence: "Thinking is costly.",
  explanation: "The brain uses significant energy and prefers efficiency.",
  example: "Mental fatigue after intense focus.",
  whenToUse: "Work design.",
  warning: "Overload leads to burnout.",
  tags: ["energy", "focus"]
},

{
  id: "neuro_identity_brain",
  category: "NEUROSCIENCE",
  title: "Neural Basis of Identity",
  essence: "Identity is constructed, not fixed.",
  explanation: "The sense of self emerges from brain patterns and memory.",
  example: "Personality shifts after major life events.",
  whenToUse: "Personal growth.",
  warning: "Rigid identity blocks change.",
  tags: ["identity", "self"]
},
   {
  id: "paradox_ship_of_theseus",
  category: "PARADOX",
  title: "Ship of Theseus",
  essence: "If everything changes, is it still the same?",
  explanation: "If all parts of an object are replaced over time, does its identity remain?",
  example: "Is a person the same after years of change?",
  reflection: "What truly defines identity?",
  tags: ["identity", "change"]
},

{
  id: "paradox_liar",
  category: "PARADOX",
  title: "The Liar Paradox",
  essence: "This statement is false.",
  explanation: "If the statement is true, it must be false — and vice versa.",
  example: "Logical contradiction in self-reference.",
  reflection: "Can language fully describe truth?",
  tags: ["logic", "truth"]
},

{
  id: "paradox_sorites",
  category: "PARADOX",
  title: "Sorites Paradox",
  essence: "When does a heap stop being a heap?",
  explanation: "Small changes don’t seem to matter, yet lead to big differences.",
  example: "Removing one grain from a heap.",
  reflection: "Where do boundaries truly exist?",
  tags: ["vagueness", "logic"]
},

{
  id: "paradox_grandfather",
  category: "PARADOX",
  title: "Grandfather Paradox",
  essence: "Can you change the past?",
  explanation: "If you prevent your own existence, how did you travel back?",
  example: "Time travel contradictions.",
  reflection: "Is time linear or fixed?",
  tags: ["time", "causality"]
},

{
  id: "paradox_freedom_choice",
  category: "PARADOX",
  title: "Paradox of Choice",
  essence: "More options reduce satisfaction.",
  explanation: "Too many choices create anxiety and regret.",
  example: "Struggling to choose from hundreds of options.",
  reflection: "Does freedom always improve happiness?",
  tags: ["decision", "psychology"]
},

{
  id: "paradox_hedonism",
  category: "PARADOX",
  title: "Hedonic Paradox",
  essence: "Chasing happiness reduces happiness.",
  explanation: "Direct pursuit of pleasure often leads to dissatisfaction.",
  example: "Success not bringing fulfillment.",
  reflection: "What is happiness really?",
  tags: ["happiness", "psychology"]
},

{
  id: "paradox_knowledge",
  category: "PARADOX",
  title: "Paradox of Knowledge",
  essence: "The more you know, the more you realize you don’t know.",
  explanation: "Knowledge expands awareness of ignorance.",
  example: "Experts seeing complexity.",
  reflection: "Is wisdom knowing limits?",
  tags: ["knowledge", "wisdom"]
},

{
  id: "paradox_tolerance",
  category: "PARADOX",
  title: "Paradox of Tolerance",
  essence: "Unlimited tolerance destroys tolerance.",
  explanation: "Tolerating intolerance enables harm.",
  example: "Extremism in free societies.",
  reflection: "Where should limits exist?",
  tags: ["society", "ethics"]
},

{
  id: "paradox_control",
  category: "PARADOX",
  title: "Paradox of Control",
  essence: "Trying to control everything causes loss of control.",
  explanation: "Overcontrol creates fragility and anxiety.",
  example: "Micromanagement failing.",
  reflection: "What should you let go?",
  tags: ["control", "life"]
},

{
  id: "paradox_confidence",
  category: "PARADOX",
  title: "Confidence Paradox",
  essence: "The least skilled are often most confident.",
  explanation: "Lack of knowledge hides incompetence.",
  example: "Dunning–Kruger effect.",
  reflection: "How do you measure true competence?",
  tags: ["skill", "bias"]
},

{
  id: "paradox_effort",
  category: "PARADOX",
  title: "Effort Paradox",
  essence: "Trying too hard causes failure.",
  explanation: "Some outcomes require relaxed effort.",
  example: "Forcing creativity blocks it.",
  reflection: "When should effort be softened?",
  tags: ["performance", "flow"]
},

{
  id: "paradox_time",
  category: "PARADOX",
  title: "Time Paradox",
  essence: "The future shapes the present.",
  explanation: "Expectations of the future influence current behavior.",
  example: "Saving for retirement changes today’s choices.",
  reflection: "Is time one-directional?",
  tags: ["time", "mind"]
},

{
  id: "paradox_learning",
  category: "PARADOX",
  title: "Learning Paradox",
  essence: "To learn, you must accept not knowing.",
  explanation: "Ego blocks learning.",
  example: "Beginners progress faster than proud intermediates.",
  reflection: "Where does ego stop growth?",
  tags: ["learning", "ego"]
},

{
  id: "paradox_choice_commitment",
  category: "PARADOX",
  title: "Commitment Paradox",
  essence: "Limiting options increases freedom.",
  explanation: "Commitment removes decision anxiety.",
  example: "Daily routines increasing productivity.",
  reflection: "What choices should you remove?",
  tags: ["discipline", "focus"]
},

{
  id: "paradox_success",
  category: "PARADOX",
  title: "Success Paradox",
  essence: "Success creates the conditions for failure.",
  explanation: "Past success leads to complacency.",
  example: "Companies disrupted after success.",
  reflection: "How do you stay adaptive?",
  tags: ["success", "growth"]
},

{
  id: "paradox_identity",
  category: "PARADOX",
  title: "Identity Paradox",
  essence: "Holding identity too tightly prevents becoming.",
  explanation: "Rigid self-image blocks change.",
  example: "“I’m not that kind of person.”",
  reflection: "Who could you become?",
  tags: ["identity", "change"]
},

{
  id: "paradox_security",
  category: "PARADOX",
  title: "Security Paradox",
  essence: "Seeking safety creates fragility.",
  explanation: "Overprotection reduces resilience.",
  example: "Avoiding challenges weakens growth.",
  reflection: "Where do you need discomfort?",
  tags: ["resilience", "life"]
},

{
  id: "paradox_attention",
  category: "PARADOX",
  title: "Attention Paradox",
  essence: "Seeking attention reduces respect.",
  explanation: "Quiet competence attracts more trust.",
  example: "Leaders who don’t self-promote.",
  reflection: "What speaks louder than words?",
  tags: ["status", "social"]
},

{
  id: "paradox_change",
  category: "PARADOX",
  title: "Change Paradox",
  essence: "Change begins with acceptance.",
  explanation: "Fighting reality blocks transformation.",
  example: "Therapy and self-growth.",
  reflection: "What must you accept first?",
  tags: ["growth", "mindset"]
},

{
  id: "paradox_life",
  category: "PARADOX",
  title: "Life Paradox",
  essence: "Meaning is created, not found.",
  explanation: "Life has no built-in meaning, yet humans create it.",
  example: "Values shaping purpose.",
  reflection: "What meaning are you choosing?",
  tags: ["meaning", "existence"]
},
   {
  id: "theory_string",
  category: "THEORY",
  title: "String Theory",
  essence: "Everything is made of vibrating strings.",
  explanation: "At the smallest level, particles are tiny strings whose vibrations determine their properties.",
  example: "Different vibrations create different particles.",
  reflection: "Is reality simpler or more complex than it appears?",
  tags: ["physics", "reality"]
},

{
  id: "theory_relativity",
  category: "THEORY",
  title: "Theory of Relativity",
  essence: "Time and space are relative.",
  explanation: "Time and space change depending on speed and gravity.",
  example: "Time moves slower near massive objects.",
  reflection: "Is time absolute or experienced?",
  tags: ["physics", "time"]
},

{
  id: "theory_quantum_mechanics",
  category: "THEORY",
  title: "Quantum Mechanics",
  essence: "Reality is probabilistic.",
  explanation: "At small scales, particles behave unpredictably until observed.",
  example: "A particle existing in multiple states.",
  reflection: "Does observation shape reality?",
  tags: ["physics", "uncertainty"]
},

{
  id: "theory_big_bang",
  category: "THEORY",
  title: "Big Bang Theory",
  essence: "The universe had a beginning.",
  explanation: "The universe expanded from a hot, dense state.",
  example: "Cosmic background radiation.",
  reflection: "What existed before the beginning?",
  tags: ["cosmology", "origin"]
},

{
  id: "theory_evolution",
  category: "THEORY",
  title: "Theory of Evolution",
  essence: "Life adapts through selection.",
  explanation: "Species evolve through variation and natural selection.",
  example: "Resistance to disease over generations.",
  reflection: "Is adaptation ongoing in your life?",
  tags: ["biology", "change"]
},

{
  id: "theory_cognitive_dissonance",
  category: "THEORY",
  title: "Cognitive Dissonance Theory",
  essence: "The mind avoids inner conflict.",
  explanation: "People adjust beliefs to reduce mental discomfort.",
  example: "Justifying bad decisions.",
  reflection: "What beliefs protect your ego?",
  tags: ["psychology", "belief"]
},

{
  id: "theory_attachment",
  category: "THEORY",
  title: "Attachment Theory",
  essence: "Early bonds shape relationships.",
  explanation: "Childhood attachment affects adult behavior.",
  example: "Fear of abandonment.",
  reflection: "How do you connect to others?",
  tags: ["psychology", "relationships"]
},

{
  id: "theory_game",
  category: "THEORY",
  title: "Game Theory",
  essence: "Decisions depend on others.",
  explanation: "Outcomes depend on strategic interaction.",
  example: "Prisoner’s Dilemma.",
  reflection: "Are you competing or cooperating?",
  tags: ["strategy", "decision"]
},

{
  id: "theory_chaos",
  category: "THEORY",
  title: "Chaos Theory",
  essence: "Small changes cause big effects.",
  explanation: "Complex systems are highly sensitive.",
  example: "Butterfly effect.",
  reflection: "Which small habits shape your future?",
  tags: ["systems", "complexity"]
},

{
  id: "theory_information",
  category: "THEORY",
  title: "Information Theory",
  essence: "Information reduces uncertainty.",
  explanation: "Information can be measured and transmitted efficiently.",
  example: "Data compression.",
  reflection: "What reduces uncertainty in your life?",
  tags: ["information", "communication"]
},

{
  id: "theory_simulation",
  category: "THEORY",
  title: "Simulation Theory",
  essence: "Reality may be simulated.",
  explanation: "Advanced civilizations might simulate realities.",
  example: "Video game worlds.",
  reflection: "Does meaning depend on origin?",
  tags: ["philosophy", "reality"]
},

{
  id: "theory_social_contract",
  category: "THEORY",
  title: "Social Contract Theory",
  essence: "Society is an agreement.",
  explanation: "People give up freedom for order.",
  example: "Laws and governance.",
  reflection: "What do you trade for security?",
  tags: ["society", "ethics"]
},

{
  id: "theory_constructivism",
  category: "THEORY",
  title: "Constructivism",
  essence: "Knowledge is built, not received.",
  explanation: "Learning happens through experience.",
  example: "Learning by doing.",
  reflection: "How do you build understanding?",
  tags: ["learning", "education"]
},

{
  id: "theory_behaviorism",
  category: "THEORY",
  title: "Behaviorism",
  essence: "Behavior is shaped by reward.",
  explanation: "Actions are reinforced by consequences.",
  example: "Habits formed through rewards.",
  reflection: "What rewards shape you?",
  tags: ["behavior", "habits"]
},

{
  id: "theory_unconscious",
  category: "THEORY",
  title: "Unconscious Mind Theory",
  essence: "Most thinking is hidden.",
  explanation: "Unconscious processes guide behavior.",
  example: "Automatic reactions.",
  reflection: "What drives you unconsciously?",
  tags: ["mind", "psychology"]
},

{
  id: "theory_systems",
  category: "THEORY",
  title: "Systems Theory",
  essence: "Everything is interconnected.",
  explanation: "Parts influence the whole system.",
  example: "Ecosystems or organizations.",
  reflection: "What system are you part of?",
  tags: ["systems", "holistic"]
},

{
  id: "theory_multiple_intelligence",
  category: "THEORY",
  title: "Multiple Intelligences",
  essence: "Intelligence has many forms.",
  explanation: "People excel in different cognitive domains.",
  example: "Musical vs logical intelligence.",
  reflection: "Where are you naturally strong?",
  tags: ["intelligence", "learning"]
},

{
  id: "theory_self_determination",
  category: "THEORY",
  title: "Self-Determination Theory",
  essence: "Autonomy fuels motivation.",
  explanation: "People thrive when autonomous, competent, and connected.",
  example: "Intrinsic motivation.",
  reflection: "What motivates you internally?",
  tags: ["motivation", "self"]
},

{
  id: "theory_emergence",
  category: "THEORY",
  title: "Emergence Theory",
  essence: "The whole is more than parts.",
  explanation: "Complex patterns arise from simple rules.",
  example: "Ant colonies.",
  reflection: "What emerges from your daily actions?",
  tags: ["complexity", "patterns"]
},

{
  id: "theory_identity_narrative",
  category: "THEORY",
  title: "Narrative Identity Theory",
  essence: "We live by stories.",
  explanation: "Identity is shaped by personal narratives.",
  example: "Life seen as a story.",
  reflection: "What story are you telling yourself?",
  tags: ["identity", "meaning"]
},
];
window.SEED_VAULT = SEED_VAULT;


