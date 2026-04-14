'use strict';
/* ═══════════════════════════════════════════════════════════════════════════
   MODULE 05 · Review & Exam Prep
═══════════════════════════════════════════════════════════════════════════ */

window.M05 = {
html: `
<section class="module reveal" id="review">
  <div class="module-header">
    <div class="module-num">Module 05</div>
    <h2 class="module-title">Review &amp; <em>Exam Prep</em></h2>
    <p class="module-tag">Everything you need to walk into the exam confident. High-yield comparisons, concept maps, and a full practice Q&amp;A set.</p>
  </div>

  <!-- SECTION: Master Comparison Table -->
  <div class="section-break reveal">
    <div class="section-label">§ 5.1</div>
    <h3>High-Yield Comparisons</h3>

    <h4>Development: Fast Block vs. Slow Block</h4>
    <table class="reveal">
      <thead>
        <tr><th>Feature</th><th>Fast Block</th><th>Slow Block (Cortical Reaction)</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Mechanism</strong></td><td>Membrane depolarisation (Na⁺ influx)</td><td>Cortical granule exocytosis (Ca²⁺ wave)</td></tr>
        <tr><td><strong>Speed</strong></td><td>Seconds (&lt;1 sec)</td><td>~30–60 seconds</td></tr>
        <tr><td><strong>Duration</strong></td><td>Temporary (minutes)</td><td>Permanent</td></tr>
        <tr><td><strong>What changes</strong></td><td>Egg membrane potential (−70 → +20 mV)</td><td>fertilization envelope raised; zona pellucida modified</td></tr>
        <tr><td><strong>Signal</strong></td><td>Sperm fusion opens Na⁺ channels</td><td>IP₃ → Ca²⁺ release from ER → CICR wave</td></tr>
        <tr><td><strong>Prevents</strong></td><td>Additional sperm membrane fusion</td><td>Sperm binding to egg coat</td></tr>
      </tbody>
    </table>

    <h4 style="margin-top:2rem;">Development: Germ Layer Origin of Key Structures</h4>
    <table class="reveal">
      <thead>
        <tr><th>Structure</th><th>Germ Layer</th><th>Memory Hook</th></tr>
      </thead>
      <tbody>
        <tr><td>Brain &amp; spinal cord</td><td><span class="ecto">Ectoderm</span></td><td>Nervous system = "outside" world interface</td></tr>
        <tr><td>Epidermis (skin, hair, nails)</td><td><span class="ecto">Ectoderm</span></td><td>Outermost layer → outermost germ layer</td></tr>
        <tr><td>Neural crest derivatives (PNS, skull bones, melanocytes)</td><td><span class="ecto">Ectoderm</span> (dorsal)</td><td>"4th germ layer" — migrates everywhere</td></tr>
        <tr><td>Heart &amp; blood vessels</td><td><span class="meso">Mesoderm</span></td><td>Middle layer → middle of the body</td></tr>
        <tr><td>Skeletal muscle, bones, cartilage</td><td><span class="meso">Mesoderm</span></td><td>Muscles in the middle of the body wall</td></tr>
        <tr><td>Kidneys &amp; gonads</td><td><span class="meso">Mesoderm</span></td><td>Urogenital = middle body structures</td></tr>
        <tr><td>Gut lining (entire GI tract)</td><td><span class="endo">Endoderm</span></td><td>Innermost layer → innermost tube</td></tr>
        <tr><td>Liver &amp; pancreas</td><td><span class="endo">Endoderm</span></td><td>Digestive accessory glands = gut-derived</td></tr>
        <tr><td>Lung epithelium</td><td><span class="endo">Endoderm</span></td><td>Lungs bud from the foregut endoderm</td></tr>
        <tr><td>Thyroid, thymus</td><td><span class="endo">Endoderm</span></td><td>Pharyngeal pouches (endoderm)</td></tr>
        <tr><td>Adrenal cortex</td><td><span class="meso">Mesoderm</span></td><td>Steroid-secreting = mesoderm</td></tr>
        <tr><td>Adrenal medulla</td><td><span class="ecto">Ectoderm</span> (neural crest)</td><td>Modified sympathetic neurons → neural crest</td></tr>
      </tbody>
    </table>

    <h4 style="margin-top:2rem;">Evolution: Five Agents &amp; Their H-W Condition Violated</h4>
    <table class="reveal">
      <thead>
        <tr><th>Agent</th><th>H-W Condition Violated</th><th>Effect on Allele Frequencies</th><th>Produces Adaptation?</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Natural Selection</strong></td>
          <td>No selection</td>
          <td>Directional, increases frequency of favoured alleles</td>
          <td><span style="color:var(--teal)">YES — only mechanism that does</span></td>
        </tr>
        <tr>
          <td><strong>Genetic Drift</strong></td>
          <td>Large population size</td>
          <td>Random; can fix or eliminate alleles</td>
          <td><span style="color:var(--rose)">No — random</span></td>
        </tr>
        <tr>
          <td><strong>Gene Flow</strong></td>
          <td>No migration</td>
          <td>Homogenises populations; introduces alleles</td>
          <td><span style="color:var(--rose)">No — moves existing alleles</span></td>
        </tr>
        <tr>
          <td><strong>Mutation</strong></td>
          <td>No mutation</td>
          <td>Tiny rate per generation; creates new alleles</td>
          <td><span style="color:var(--gold)">Provides raw material only</span></td>
        </tr>
        <tr>
          <td><strong>Non-random Mating</strong></td>
          <td>Random mating</td>
          <td>Changes genotype frequencies, not allele frequencies</td>
          <td><span style="color:var(--rose)">No (alone) — but exposes alleles to selection</span></td>
        </tr>
      </tbody>
    </table>

    <h4 style="margin-top:2rem;">Speciation: Allopatric vs. Sympatric</h4>
    <table class="reveal">
      <thead>
        <tr><th>Feature</th><th>Allopatric</th><th>Sympatric</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Geographic separation?</strong></td><td>Yes — required</td><td>No — same area</td></tr>
        <tr><td><strong>Gene flow during speciation?</strong></td><td>Reduced/eliminated by barrier</td><td>Potentially present; must be overcome</td></tr>
        <tr><td><strong>Mechanisms</strong></td><td>Vicariance, dispersal + isolation</td><td>Polyploidy, disruptive selection + assortative mating</td></tr>
        <tr><td><strong>Speed</strong></td><td>Slow (thousands–millions of years)</td><td>Can be instantaneous (polyploidy)</td></tr>
        <tr><td><strong>Prevalence</strong></td><td>Most common overall</td><td>Very common in plants via polyploidy</td></tr>
        <tr><td><strong>Examples</strong></td><td>Darwin's finches, Galápagos tortoises</td><td>Tragopogon, wheat, apple maggot fly (incipient)</td></tr>
      </tbody>
    </table>
  </div>

  <!-- SECTION: Key Vocabulary Flash Cards -->
  <div class="section-break reveal">
    <div class="section-label">§ 5.2</div>
    <h3>Key Vocabulary — Flash Card Accordion</h3>
    <p>Click each term to reveal the definition. Test yourself before revealing.</p>

    <div class="accordion reveal">
      <div class="accordion-item">
        <button class="accordion-trigger">Morphogen <span class="accordion-icon">+</span></button>
        <div class="accordion-body"><div class="accordion-content">
          A signalling molecule that exists in a gradient and specifies different cell fates at different concentration thresholds. Classic example: Bicoid protein in Drosophila — high concentration specifies head structures; lower concentrations specify progressively more posterior structures. A morphogen doesn't just say "yes/no" — it provides positional information along a gradient.
        </div></div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Induction <span class="accordion-icon">+</span></button>
        <div class="accordion-body"><div class="accordion-content">
          The process by which one group of cells (the inducer) signals a neighbouring group (the responding tissue) to change its developmental fate. Requires: (1) an inductive signal (ligand), (2) a competent responding tissue (with the correct receptor), (3) an intracellular signalling pathway, (4) a transcriptional response. Classic example: lens induction — the optic cup induces overlying ectoderm to form the lens placode.
        </div></div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Competence <span class="accordion-icon">+</span></button>
        <div class="accordion-body"><div class="accordion-content">
          The ability of a tissue to respond to an inductive signal. A tissue is competent if it expresses the correct receptor and intracellular signalling components. Competence windows are temporally regulated — a tissue is only competent for a limited developmental period. If the signal arrives too early or too late, no induction occurs.
        </div></div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Homeodomain / Homeobox <span class="accordion-icon">+</span></button>
        <div class="accordion-body"><div class="accordion-content">
          The homeobox is a 180-base-pair DNA sequence encoding the homeodomain — a 60-amino-acid helix-turn-helix protein domain that binds specific DNA sequences to regulate transcription. Hox genes, Pax genes, and many other developmental regulators contain homeoboxes. The homeodomain is extraordinarily conserved — the homeodomain of a fly and human Hox gene differ by only a few amino acids yet retain function.
        </div></div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Hardy-Weinberg Equilibrium <span class="accordion-icon">+</span></button>
        <div class="accordion-body"><div class="accordion-content">
          A mathematical model predicting that allele and genotype frequencies in a population will remain constant from generation to generation in the absence of other evolutionary influences. Described by: p + q = 1 (allele frequencies) and p² + 2pq + q² = 1 (genotype frequencies). Requires: random mating, large population, no selection, no mutation, no migration. It is the null hypothesis of population genetics — deviation indicates evolution is occurring.
        </div></div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Genetic Drift <span class="accordion-icon">+</span></button>
        <div class="accordion-body"><div class="accordion-content">
          Random changes in allele frequencies due to chance sampling in finite populations. Effect is strongest in small populations. Two special cases: (1) Bottleneck effect — sudden population size reduction due to catastrophe; (2) Founder effect — small group establishes new population. Drift can fix neutral or even harmful alleles by chance. Unlike selection, drift has no direction and produces no adaptations.
        </div></div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Allopatric Speciation <span class="accordion-icon">+</span></button>
        <div class="accordion-body"><div class="accordion-content">
          Speciation that occurs when populations are geographically separated. The barrier prevents gene flow, allowing independent evolution through mutation, drift, and selection. Over time, reproductive isolation accumulates. The most common mode of speciation. Example: Darwin's finches on different Galápagos islands.
        </div></div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Allopolyploidy <span class="accordion-icon">+</span></button>
        <div class="accordion-body"><div class="accordion-content">
          A type of polyploidy arising from hybridisation between two different species followed by genome duplication. The F1 hybrid is typically sterile (cannot pair chromosomes in meiosis). If the genome doubles, each chromosome has a pairing partner → the organism is fertile but reproductively isolated from both parent species → instantaneous speciation. Extremely common in plants (~70% of angiosperms have polyploidy in their history). Example: Common wheat (hexaploid, AABBDD).
        </div></div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Neural Crest Cells <span class="accordion-icon">+</span></button>
        <div class="accordion-body"><div class="accordion-content">
          A population of cells unique to vertebrates that arise at the border of the neural plate and surface ectoderm during neurulation. They undergo an epithelial-to-mesenchymal transition (EMT) and migrate extensively throughout the embryo. Derivatives include: peripheral ganglia, Schwann cells, craniofacial bones and cartilage, melanocytes, smooth muscle of the great arteries, adrenal medulla, dental pulp. Sometimes called the "4th germ layer." Diseases of neural crest origin = neurocristopathies (Hirschsprung's disease, DiGeorge syndrome, melanoma, neurofibromatosis).
        </div></div>
      </div>
      <div class="accordion-item">
        <button class="accordion-trigger">Biological Species Concept <span class="accordion-icon">+</span></button>
        <div class="accordion-body"><div class="accordion-content">
          Proposed by Ernst Mayr (1942): A species is a group of populations whose members can actually or potentially interbreed and produce fertile offspring, and who are reproductively isolated from other groups. The defining criterion is reproductive isolation. Limitation: cannot apply to asexual organisms or fossils; problematic for ring species and partially overlapping species ranges. Despite limitations, it remains the most widely used species concept in zoology.
        </div></div>
      </div>
    </div>
  </div>

  <!-- SECTION: Full Practice Q&A -->
  <div class="section-break reveal">
    <div class="section-label">§ 5.3</div>
    <h3>Comprehensive Practice Questions</h3>
    <p>These are exam-style questions spanning all four modules. Attempt each before revealing the answer.</p>

    <div class="qa-set">
      <div class="qa-item">
        <div class="qa-q">1. A mutation in a gap gene eliminates expression in a stripe of cells in the middle of a Drosophila embryo. What phenotype do you expect in the adult fly? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>The adult fly would show a <strong>"gap" phenotype</strong> — several consecutive body segments would be missing from the middle of the body, likely covering the thoracic-abdominal boundary. For example, a krüppel mutant lacks thoracic and anterior abdominal segments, producing an embryo with head and posterior abdomen but no middle body. This is because gap genes act in broad stripes to activate pair-rule genes, which then set up the segmented body plan. Without a gap gene in the middle domain, the cascade of pair-rule → segment polarity → homeotic gene activation cannot occur in that region, so those segments fail to form. The remaining segments develop relatively normally.</p>
        </div></div>
      </div>

      <div class="qa-item">
        <div class="qa-q">2. In sea urchins, the cortical reaction is triggered by a Ca²⁺ wave. Propose a pharmacological experiment to test whether Ca²⁺ release from intracellular stores (ER) is required for the cortical reaction. <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p><strong>Prediction:</strong> If Ca²⁺ released from ER stores is required, then blocking ER Ca²⁺ release should prevent the cortical reaction even if sperm entry occurs normally.</p>
          <p><strong>Experiment:</strong> Treat unfertilised eggs with <strong>heparin</strong> (an IP₃ receptor antagonist that blocks Ca²⁺ release from ER) or <strong>thapsigargin</strong> (depletes ER Ca²⁺ stores by inhibiting SERCA pumps). Then fertilise with normal sperm. If ER Ca²⁺ is required, these eggs should show a fast block (membrane depolarisation — that doesn't require ER Ca²⁺) but <em>no</em> cortical reaction and <em>no</em> fertilization envelope elevation. Polyspermy should increase. Compare with control eggs (no drug) which show normal cortical reaction and single-sperm fertilization.</p>
          <p><strong>Controls needed:</strong> Confirm drug doesn't prevent sperm binding; confirm sperm can still fuse; use Ca²⁺-sensitive fluorescent dyes to verify the Ca²⁺ wave is absent.</p>
        </div></div>
      </div>

      <div class="qa-item">
        <div class="qa-q">3. What is the frequency of carriers (Aa) in a population where 1 in 10,000 individuals has PKU (phenylketonuria, aa)? Assume H-W equilibrium. <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>Step 1: q² = 1/10,000 = 0.0001 → <strong>q = √0.0001 = 0.01</strong></p>
          <p>Step 2: p = 1 − q = 1 − 0.01 = <strong>0.99</strong></p>
          <p>Step 3: Carrier frequency = 2pq = 2(0.99)(0.01) = <strong>0.0198 ≈ 1 in 50</strong></p>
          <p>This means approximately 1 in 50 people in this population carries the PKU allele — even though only 1 in 10,000 shows the disease. This illustrates why recessive diseases are hard to eliminate from populations — the vast majority of disease alleles are "hidden" in phenotypically normal carriers. Selection against the disease phenotype (aa) changes q very slowly because q² &lt;&lt; 2pq.</p>
        </div></div>
      </div>

      <div class="qa-item">
        <div class="qa-q">4. Explain why stabilising selection does not lead to evolution in the same way that directional selection does, yet it is still "selection." <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>Stabilising selection selects <em>against</em> both extremes and <em>for</em> intermediate phenotypes. It doesn't change the mean of the trait distribution — the most common phenotype (the intermediate) remains the most fit. Therefore, it doesn't shift allele frequencies in a directional way and doesn't produce evolutionary change in the mean phenotype. In this sense, it "conserves" rather than "changes" the phenotype.</p>
          <p>However, it is still selection because: (1) It is differential reproduction based on phenotype — individuals with extreme phenotypes leave fewer offspring. (2) It reduces genetic variation — it eliminates extreme alleles from the population over time, narrowing the distribution. (3) It maintains adaptations that are already well-suited to a stable environment — without stabilising selection, mutations pushing the phenotype toward extremes would accumulate. It is the most common form of selection acting on most traits in stable environments — it explains why most populations remain phenotypically stable even though mutations are constantly arising.</p>
        </div></div>
      </div>

      <div class="qa-item">
        <div class="qa-q">5. What features of neural crest cells make them unique to vertebrates, and what evolutionary advantage might they have conferred? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p>Neural crest cells are unique to vertebrates (absent in invertebrate chordates like lancelets and tunicates, and absent in all non-chordate animals). Their unique features:</p>
          <ul>
            <li><strong>Epithelial-to-mesenchymal transition (EMT)</strong> — they completely change their physical properties to become migratory mesenchyme; very few other embryonic cells do this</li>
            <li><strong>Extraordinary migratory capacity</strong> — they travel long distances along stereotyped routes using chemotaxis and cell-cell/ECM interactions</li>
            <li><strong>Remarkable developmental plasticity</strong> — they can differentiate into an astonishing diversity of cell types (neurons, glia, bone, cartilage, muscle, pigment, endocrine)</li>
          </ul>
          <p><strong>Evolutionary advantage:</strong> Neural crest cells enabled the "New Head" hypothesis (Gans &amp; Northcutt, 1983) — the evolution of a complex, mobile head with jaws, cranial sensory organs, and a larger brain. By providing the cellular material for the vertebrate craniofacial skeleton, neural crest cells enabled: predatory jaws (increased feeding efficiency), complex sense organs (eyes, ears, lateral line, nose), and eventually the extraordinary cognitive elaboration of the vertebrate brain. Without neural crest cells, vertebrate diversity and complexity as we know it would be impossible.</p>
        </div></div>
      </div>

      <div class="qa-item">
        <div class="qa-q">6. Distinguish between a clade, a grade, and a paraphyletic group. Why do cladists reject paraphyletic groups? <span class="qa-arrow">▾</span></div>
        <div class="qa-a"><div class="qa-a-inner">
          <p><strong>Clade (monophyletic group):</strong> Includes an ancestor and ALL of its descendants. Identified by shared derived characters (synapomorphies). The only "natural" group in cladistic taxonomy. Example: Mammalia (all mammals) = a clade.</p>
          <p><strong>Grade:</strong> A level of morphological organisation or complexity, not necessarily a clade. Example: "Reptiles" in the traditional sense includes lizards, snakes, crocodilians, and turtles — but this is a grade, not a clade, because birds (descended from theropod dinosaurs) are excluded despite being the sister group of crocodilians.</p>
          <p><strong>Paraphyletic group:</strong> Includes an ancestor and SOME but not all descendants. Example: "Reptiles" (excluding birds) is paraphyletic. "Fish" (excluding tetrapods, which evolved from fish) is paraphyletic.</p>
          <p>Cladists reject paraphyletic groups because: they are <em>arbitrary</em> — there is no principled reason to exclude birds from "Reptiles" except human convenience. Paraphyletic groups don't represent a natural unit with a shared evolutionary history. Including them in formal taxonomy creates confusion and misleading comparisons. All members of a clade share a unique common ancestry not shared with members of other clades — this is what makes clades natural and informative.</p>
        </div></div>
      </div>
    </div>
  </div>

  <!-- SECTION: Formula & Fact Sheet -->
  <div class="section-break reveal">
    <div class="section-label">§ 5.4</div>
    <h3>Quick Reference — Key Formulas &amp; Facts</h3>

    <div class="grid g2 reveal">
      <div class="card reveal-item delay-1">
        <h4>Hardy-Weinberg</h4>
        <div class="formula" style="font-size:1.1rem; padding:1rem;">
          p + q = 1<br>
          p² + 2pq + q² = 1
        </div>
        <ul style="font-size:0.85em;">
          <li>p = freq of dominant allele (A)</li>
          <li>q = freq of recessive allele (a)</li>
          <li>p² = freq of AA genotype</li>
          <li>2pq = freq of Aa (carriers)</li>
          <li>q² = freq of aa (recessive phenotype)</li>
          <li><strong>Always start with q² when solving</strong></li>
        </ul>
      </div>
      <div class="card reveal-item delay-2">
        <h4>Key Numbers to Know</h4>
        <table style="margin:0;">
          <tbody>
            <tr><td>Age of Earth</td><td><strong style="color:var(--teal)">~4.6 billion years</strong></td></tr>
            <tr><td>First life</td><td><strong style="color:var(--teal)">~3.8 billion years ago</strong></td></tr>
            <tr><td>First eukaryotes</td><td><strong style="color:var(--teal)">~2.1 billion years ago</strong></td></tr>
            <tr><td>Cambrian explosion</td><td><strong style="color:var(--teal)">~541–520 Ma</strong></td></tr>
            <tr><td>End-Permian extinction</td><td><strong style="color:var(--rose)">~252 Ma; 96% sp</strong></td></tr>
            <tr><td>K-Pg extinction</td><td><strong style="color:var(--rose)">~66 Ma; 76% sp</strong></td></tr>
            <tr><td>Human cells</td><td><strong style="color:var(--violet)">~37 trillion</strong></td></tr>
            <tr><td>Human cell types</td><td><strong style="color:var(--violet)">~200</strong></td></tr>
            <tr><td>Human Hox genes</td><td><strong style="color:var(--violet)">39 (in 4 clusters)</strong></td></tr>
            <tr><td>C. elegans adult cells</td><td><strong style="color:var(--gold)">959 (♀ soma)</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="divider reveal">GOOD LUCK ON THE EXAM</div>

    <div class="callout callout-violet reveal" style="text-align:center;">
      <div class="callout-label" style="justify-content:center;">◈ A note from the Codex</div>
      <p style="color:var(--ink-soft); font-style:italic; font-size:1.05rem;">"Nothing in biology makes sense except in the light of evolution." — Theodosius Dobzhansky, 1973</p>
      <p style="color:var(--ink-dim); margin-top:0.5rem;">Development and evolution are two sides of the same coin. Evo-devo — the field that connects them — is one of the most exciting areas of modern biology. The Hox genes that pattern a fly's body are the same genes (in rearranged copies) that pattern yours. You are not separate from this story. You are the story.</p>
    </div>
  </div>

</section>
`};
