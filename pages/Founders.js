import Navbar from './Navbar'
import Footer from './Footer'
const people = [
  {
    name: 'GUNJAN MAHESHWARI',
    role: 'President',
    imageUrl:'/Founders/Gunjan Maheshwari.jpg',
    bio: 'Gunjan Maheshwari is the Founded President of The Joy Makers Foundation. She is a senior advocate by profession and the most responsible and the sensible member. She works dedicatedly towards this foundation. It’s her hard earned efforts that we have come this long way and she her dedication made this journey beautiful and impactful.',
  },
  {
    name: ' RISHABH NIGAM ',
    role: 'Secretary',
    imageUrl:'/Founders/Rishabh Nigam.webp',
    bio: 'Being the secretary of the JoyMakers, Rishabh’s aspiration is to bring change in the life of the children, who are under privileged and lack resources to be an asset of the country. He considers education as a basic right of every individual. He is currently pursuing BBA and is highly devoted to make a difference in the lives of these unfortunates!',
  },
  {
    name: ' NAMAN JAIN ',
    role: 'Organiser',
    imageUrl:'/Founders/Naman Jain.jpeg',
    bio: 'Naman Jain holds a crucial role in this foundation. He is a treasurer and is the one who plays a key role in organising the drives. Naman is a CA/ CMA student and is a saviour in both professional and social life.',
  },
  {
    name: ' GOVIND SINGH',
    role: 'Vice President',
    imageUrl:'/Founders/Govind Singh.jpg',
    bio: 'Govind Singh is the Vice President of the foundation. He is pursuing Petroleum Engineering and he is a determines social worker of the foundation and being a core member he looks after every minute details of our drives and work areas.',
  },
  {
    name: ' ASHISH JAIN',
    role: 'Vice Secreatary',
    imageUrl:'/Founders/Aashish Jain.jpg',
    bio: 'Ashish Jain is the Vice Secretary and also a Textile Engineer. He is a charmer of all our social works so far. He inspires people and impact lives by helping others. He obey and is a fulfilling social worker.',
  },
  {
    name: ' KSHIPRA VIJAYVARGIYA',
    role: 'Senior Content Head',
    imageUrl:'/Founders/Kshipra Vijayavargiya.jpg',
    bio: 'Kshipra Vijyayvargiya is the Senior Content Head of our foundation. She is the main lead in creating the most effective and readable contents for the foundation well-being. Her magic reflects in her work and content. She is currently serving as an HR executive.',
  },
  {
    name: 'NITESH CHOUHAN',
    role: 'Senior Field Manager ',
    imageUrl:'/Founders/Nitesh Chouhan.jpeg',
    bio: 'Nitesh Chouhan is the Senior Field Manager and also works as an Textile Engineer. He is a skilled manager which is depicted by the way he dedicates himself in the work. Nitesh manages and make sure arrangements at site are up to mark which is the most crucial look out of our drives.',
  },
  {
    name: 'PRAVEEN GEHLOT',
    role: 'Senior Program Manager',
    imageUrl:'/Founders/Praveen Gehlot.JPG',
    bio: 'Praveen Gehlot is the Senior Program Manager and also a well know Plantation Expert. Praveen works as a Freelancer. He plays a significant role in impacting lives around. Praveen manages and heads the programs and other responsibilities.',
  },
  {
    name: 'SAKET GAGRANI',
    role: 'Senior Program Coordinator',
    imageUrl:'/Founders/Saket Gagrani.jpg',
    bio: 'Saket Gagrani works as a Senior Program Coordinator and we feel happy to have him in our team as core member. Saket is a businessman by profession. He is very humble and responsible citizen and ensures giving poor people the happiness and the joy that they deserve. ',
  },
  {
    name: 'AJAY MAHESHWARI',
    role: 'Legal Head Advicer',
    imageUrl:'/Founders/Ajay Maheshwari.jpg',
    bio: 'Ajay Maheshwari is the Legal Head Advicer who serves as the main role in fulfilling all the legalities and paper work. He helps in managing this foundation more formally and impactfully. Being a senior criminal lawyer, he looks after all the formalities of this foundation.',
  },

]

export default function Founders() {
  return (

    <div className="bg-white">
      <div><Navbar /></div>
      <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8 ">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-my-green sm:text-5xl pb-6 ">Meet our Founders</h2>

          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="aspect-w-3 aspect-h-2 h-0 sm:aspect-w-3 sm:aspect-h-5">
                    <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-my-blue text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-my-pink">{person.role}</p>
                      </div>
                      <div className="text-base">
                        <p className="text-my-blue font-light ">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}