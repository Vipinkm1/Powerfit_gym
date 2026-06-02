import { useMemo, useState } from 'react'
import SectionTitle from './SectionTitle'

function getCategory(bmi) {
  if (!bmi) return 'Enter your height and weight'
  if (bmi < 18.5) return 'Underweight'
  if (bmi < 25) return 'Normal fitness range'
  if (bmi < 30) return 'Overweight'
  return 'Obese range'
}

function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const bmi = useMemo(() => {
    const heightInMeters = Number(height) / 100
    const weightInKg = Number(weight)
    if (!heightInMeters || !weightInKg) return null
    return (weightInKg / (heightInMeters * heightInMeters)).toFixed(1)
  }, [height, weight])

  return (
    <section className="section" id="bmi">
      <div className="container bmi reveal">
        <SectionTitle
          eyebrow="BMI Calculator"
          title="Check your starting point"
          text="Use this quick estimate as a starting marker, not a final judgement of your fitness."
        />
        <div className="bmi__panel">
          <label>
            Height (cm)
            <input type="number" min="1" value={height} onChange={(event) => setHeight(event.target.value)} placeholder="e.g. 175" />
          </label>
          <label>
            Weight (kg)
            <input type="number" min="1" value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="e.g. 72" />
          </label>
          <div className="bmi__result">
            <span>Your BMI</span>
            <strong>{bmi || '--'}</strong>
            <p>{getCategory(Number(bmi))}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BMICalculator
