
import { useEffect, useState } from 'react';

interface StatCardProps {
  number: number;
  label: string;
  duration?: number;
}

const StatCard = ({ number, label, duration = 2000 }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const totalMiliseconds = duration;
    const incrementTime = totalMiliseconds / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [number, duration]);

  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">{count.toLocaleString()}+</p>
      <p className="text-gray-700 mt-2 font-medium">{label}</p>
    </div>
  );
};

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      }, 
      { threshold: 0.1 }
    );
    
    const target = document.getElementById('stats-section');
    if (target) observer.observe(target);
    
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <div className="w-20 h-1 bg-gradient mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Since our founding, we've made a measurable difference in the lives of people around the world.
          </p>
        </div>

        <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {isVisible && (
            <>
              <StatCard number={50} label="Countries Reached" />
              <StatCard number={500} label="Projects Completed" />
              <StatCard number={3500} label="Volunteers Worldwide" />
              <StatCard number={1000000} label="Lives Impacted" />
            </>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Pursuva Impact" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-6">Stories of Change</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="italic text-gray-700 mb-2">
                    "The Pursuva education program has given our children access to quality learning resources and opportunities we couldn't have imagined before. It's truly transforming our community."
                  </p>
                  <p className="font-medium">- Maria, Community Leader, Guatemala</p>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="italic text-gray-700 mb-2">
                    "After the flood destroyed everything, Pursuva didn't just provide immediate relief—they stayed and helped us rebuild stronger than before. Their sustainable approach to disaster recovery has made all the difference."
                  </p>
                  <p className="font-medium">- James, Program Participant, Philippines</p>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="italic text-gray-700 mb-2">
                    "The clean water initiative has dramatically reduced waterborne illnesses in our village. Children who used to miss school due to sickness are now able to attend regularly."
                  </p>
                  <p className="font-medium">- Dr. Aisha, Healthcare Worker, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
