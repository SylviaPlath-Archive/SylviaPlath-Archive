# Sylvia Plath's Archive

Welcome to our archive of documentary digital editions of some selected Sylvia Plath's works! <br>
Project created for the Digital Text in The Humanities course by Tiziana Mancinelli during the master degree of Digital Humanities and Digital Knowledge at the University of Bologna.

[Project Website](https://thebelljar-dse.github.io/TheBellJar-dse/)

Team
-
- **Loredana Salvatore:** insert tasks here
- **Anita Liviabella:** insert tasks here
- **Camila Oliveira:** insert tasks here

# Introduction

<p> The project provides a digital archive of selected works by Sylvia Plath, a renowned American poet, novelist, and short story writer. Plath’s confessional style and exploration of personal turmoil, depression and death have made her a highly influential figure in modern literature. Despite her relatively short life and career, her work continues to be widely studied and revered.</p>
<p>The archive focuses especially on a decade of her production, from 1956 to 1963, and includes a range of texts that showcase various aspect of her writing. The collection features her prose, poetry, and private writing, highlighting the breadth and depth of her work.</p>
<p>Plath’s private journals offer a particularly fascinating window into her personal life and creative process. In the 1956 journal, she reflects on her first encounter with fellow poet Ted Hughes at a literary party in Cambridge. In the 1958 journal, she delves into her writing process and the literary influence of DH Lawrence, Virginia Woolf, and her friend James Guy Bramwell.  This period also covers her life with her husband, and Plath reflects on their relationship as well as her admiration for Hughes’ writing. In the 1959 journal, she documents her financial struggles and her renewed enthusiasm for poetry despite experiencing depression.</p>
<p>Plath’s journals provide valuable insight into her daily life, mental health struggles, relationships with family, friends, and lovers. Additionally, they offer deeper understanding of her literary influences and the themes and ideas that shaped her work. By analyzing her journals, scholars and readers can gain a better appreciation of Plath’s multifaced personality and creative process.</p>
<p>Sylvia Plath is also known for her confessional style of poetry, which delves into intense emotions and personal issues. Her use of striking imagery to convey ideas has had a lasting impact on contemporary poetry. The archive showcases four of her selected poems:  Sleep in the Mojave Desert, Strings, Mushrooms and Ariel.
Sleep in the Mojave Desert depicts a group of women sleeping in the desert, with each person in their own private space. The author uses vivid sensory details to create a haunting atmosphere and meditates on the fragility of human life and the inevitability of death.</p>
<p>Stings explores the speaker’s emotional response to the death of a swarm of bees. The poem employs violent imagery to convey the speaker’s complex feelings of anger, sorrow, and strange sense of triumph.</p>
<p>Ariel is about the poet riding her horse at daybreak, seemingly not in full control, being pulled by something through the air towards the moving sun. The title of the poem has multiple referents, including the name of Plath’s horse.
Lastly, the archive presents the second draft of The Bell Jar, Sylvia Plath’s novel. The draft reveals Plath’s editing process and the evolving relationship between the author and her central characters. </p>
<p>The novel is an interesting work for several reason: first, it is semi-autobiographic novel that draws heavily from Plath’s own experiences with mental illness, particularly her own struggles with depression and suicidal thoughts. The novel offers a powerful and honest portrayal of the challenges faced by women in 1950s, including social pressures to conform to traditional gender roles and expectation.  These themes are particularly relevant to modern readers, as many individuals continue to struggle with questions of identity and purpose today.</p>



# Research question

Since materials from the author's personal life and professional one were being both analyzed, the main questions came up in the process:
- How the deletions differ from each other in writings for published works and the ones for journals?
- How does deletions differ from one published work to another? in this case, from the published poem and novel from the author.
- How much of Sylvia Plath's private life we can see in her writings?

# The process and the methodologies

The idea of the archive came out to provide a various digital platform, focused on different types of work, to give credits to the large production of Sylvia Plath.  All the images of the texts except DON’T REMEMBER held by the British Library.

The process to be followed in the project was only thought after the selection of the material to be encoded. And the selection of those happened in a sort of investigation. The primary goal was to understand what was the changes in the writing style of the author along a specific time span, as she also describes some occasions on her work that might have influenced those changes.

## LOD

The archive could be enriched with more of her works also following the process used in this project.

Suggestions: Characters and people in network analysis.
 
-	Be more precise about where we’ve found the material.

# Encoding

The texts have been retrieved and fully encoded in XML following the [TEI Guidelines](https://tei-c.org/), to provide a structured format that can be easily processed and analyzed in a machine-readable way. The materials are accessible in the related sections of the website.

We drive special attention to the following TEI sections: 2 for the TEI Header, 10 for Manuscript Description and 11 for Representation of Primary Sources.

Being the second one a module that defines a special purpose element which can be used to provide detailed descriptive information about handwritten primary sources and other text-bearing objects, and the third describes elements that may be used to represent primary source materials, such as manuscripts, printed books, ephemera, or other textual documents.

Besides being a mandatory element, the TEI Header is being emphasized here because it was a fundamental section in order to add:

- <xenoData> (non-TEI metadata): provides a container element into which metadata in non-TEI formats may be placed.
- <listPerson> (list of persons): contains a list of descriptions, each of which provides information about an identifiable person or a group of people, for example the participants in a language interaction, or the people referred to in a historical source. 
-	To add: Details of the tags
- #Journals
- #Stings
- #Mushrooms
- #Ariel
- #Sleep on the Mojave Desert
- #The Bell Jar: the drafts for the prose of The Bell Jar has the presence of many extra annotations by the author in many different ways.

-	To add: Details about Xenodata 

The CETEI.js library has been used to display and visualize the text in the browser. The use of the CETEI library makes the texts easily accessible and readable in the browser, providing a user-friendly interface for users. 

-	To add: description LOD part



