import { Heart, Moon, Sun } from "lucide-react";

const phases = [
  {
    name: "Follicular Phase",
    days: "Days 1–13 • Rising Energy",
    icon: <Sun/>,
    description:
      "Estrogen is climbing, energy is high—this is your power phase for building strength and pushing limits.",
    workouts: [
      "Strength training (heavy lifts, progressive overload)",
      "HIIT or interval training",
      "Running or high-cardio classes",
      "Try new skills (rock climbing, boxing)",
    ],
    nsv: '"Lifted 5lbs heavier!" • "Ran a 5K PR" • "Felt powerful during yoga"',
  },
  {
    name: "Ovulation Phase",
    days: "Days 14–16 • Peak Strength",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path d="M13.3649 20.8445C13.2448 20.3791 13.0023 19.9543 12.6624 19.6145C12.3226 19.2746 11.8978 19.0321 11.4324 18.912L3.18216 16.7845C3.0414 16.7446 2.91751 16.6598 2.8293 16.5431C2.74109 16.4263 2.69336 16.284 2.69336 16.1377C2.69336 15.9914 2.74109 15.849 2.8293 15.7323C2.91751 15.6156 3.0414 15.5308 3.18216 15.4908L11.4324 13.362C11.8977 13.2421 12.3223 12.9997 12.6621 12.6601C13.002 12.3205 13.2446 11.8961 13.3649 11.4309L15.4924 3.18064C15.5319 3.03932 15.6166 2.91483 15.7335 2.82614C15.8504 2.73746 15.9931 2.68945 16.1399 2.68945C16.2866 2.68945 16.4293 2.73746 16.5463 2.82614C16.6632 2.91483 16.7479 3.03932 16.7874 3.18064L18.9135 11.4309C19.0336 11.8963 19.2762 12.321 19.616 12.6609C19.9559 13.0008 20.3806 13.2433 20.846 13.3634L29.0963 15.4895C29.2381 15.5286 29.3633 15.6132 29.4524 15.7303C29.5416 15.8474 29.5899 15.9905 29.5899 16.1377C29.5899 16.2849 29.5416 16.428 29.4524 16.5451C29.3633 16.6621 29.2381 16.7467 29.0963 16.7859L20.846 18.912C20.3806 19.0321 19.9559 19.2746 19.616 19.6145C19.2762 19.9543 19.0336 20.3791 18.9135 20.8445L16.7861 29.0948C16.7465 29.2361 16.6618 29.3606 16.5449 29.4492C16.428 29.5379 16.2853 29.5859 16.1385 29.5859C15.9918 29.5859 15.8491 29.5379 15.7322 29.4492C15.6153 29.3606 15.5306 29.2361 15.491 29.0948L13.3649 20.8445Z" stroke="white" strokeWidth="2.68958" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M26.8965 4.03418V9.41334" stroke="white" strokeWidth="2.68958" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M29.5842 6.72363H24.2051" stroke="white" strokeWidth="2.68958" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.37891 22.8613V25.5509" stroke="white" strokeWidth="2.68958" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.72474 24.2061H4.03516" stroke="white" strokeWidth="2.68958" strokeLinecap="round" strokeLinejoin="round"/>
</svg>,
    description:
      "Testosterone and estrogen peak together—you're at your strongest physically and mentally.",
    workouts: [
      "Max-effort lifts (PRs, heavy squats/deadlifts)",
      "Endurance challenges (long runs, cycling)",
      "CrossFit-style WODs or intense classes",
      "Team sports or competitive activities",
    ],
    nsv: '"Hit a squat PR" • "Ran 10 miles strong" • "Crushed spin class"',
  },
  {
    name: "Luteal Phase",
    days: "Days 17–28 • Recovery Focus",
    icon: <Moon/>,
    description:
      "Progesterone rises, energy dips—this is your body's signal to honor rest and gentler movement.",
    workouts: [
      "Gentle yoga or pilates",
      "Walking or low-impact cardio",
      "Stretching & mobility work",
      "Rest days (guilt-free!)",
    ],
    nsv: '"Honored rest needs" • "30-min yoga felt perfect" • "Chose walk over HIIT—no guilt"',
  },
  {
    name: "Menstrual Phase",
    days: "Days 1–5 • Reset & Reflect",
    icon: <Heart/>,
    description:
      "Hormones are low, body is resetting—gentle movement or complete rest both honor your body's needs.",
    workouts: [
      "Restorative yoga or yin",
      "Light walks in nature",
      "Gentle stretching or foam rolling",
      "Full rest days (celebrate them!)",
    ],
    nsv: '"Took 2 full rest days" • "15-min stretch felt amazing" • "Listened to my body"',
  },
];

export default function CycleSyncedMovement() {
  return (
    <section className="bg-[#f2ede4] px-6 sm:px-10 py-16 sm:py-20 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-primaryColor text-4xl md:text-5xl  font-bold  leading-9 md:leading-18 mb-6">
            Cycle-Synced Movement Recommendations
          </h2>
          <p className="text-lg sm:text-xl text-[#6B7280] max-w-xl font-normal mx-auto leading-relaxed">
            Numera adapts her fitness guidance based on where you are in your cycle—no more
            guilt for skipping HIIT on Day 24.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {phases.map((phase) => (
            <div
              key={phase.name}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4"
            >
              {/* Phase header */}
              <div className="flex items-center gap-3">
                <div style={{background:'linear-gradient(135deg, #C9A96E 0%, #C0A168 7.14%, #B89962 14.29%, #AF925C 21.43%, #A78A56 28.57%, #9E8350 35.71%, #967B4B 42.86%, #8E7445 50%, #866D3F 57.14%, #7E663A 64.29%, #765E34 71.43%, #6E572F 78.57%, #66512A 85.71%, #5F4A24 92.86%, #57431F 100%)'
}} 
className=" h-12 w-12 rounded-full text-white  flex items-center justify-center text-lg flex-shrink-0">
                  {phase.icon}
                </div>
                <div>
                  <p className="text-xl md:text-2xl   font-bold  text-[#1a2e26] tracking-tight mb-3  ">
                    {phase.name}
                  </p>
                  <p className="text-sm font-normal leading-5 text-[#6B7280]">{phase.days}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-base font-normal leading-6 text-[#6B7280]">
                {phase.description}
              </p>

              {/* Workouts */}
              <div className="bg-[#F8F1E9] p-4 rounded-xl mt-4">
                <p className="text-base font-bold text-[#1a2e26] mb-1.5 leading-6">
                  Recommended Workouts
                </p>
                <ul className="space-y-1">
                  {phase.workouts.map((w, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-gray-500">
                      <span className="mt-0.5 text-sm font-normal leading-5 text-[#6B7280] flex-shrink-0">•</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* NSV Examples */}
              <div className="bg-[#F8F1E9] p-4 rounded-xl px-4 py-3">
                <p className="text-base font-bold text-[#1a2e26] mb-1.5 leading-6">
                  NSV Examples
                </p>
                <p className="mt-0.5 text-sm font-normal leading-5 text-[#6B7280] ">{phase.nsv}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}