import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  Select,
  Option,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import { QrCode, MapPin, Filter } from "lucide-react";

function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        {/* Property Title */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <Typography variant="h3" color="blue-gray">
            TODO: Property name
          </Typography>
        </div>

        {/* Select neighborhood/nearby */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* TODO: Get neighborhoods from API */}
          <Select label="Select Neighborhood">
            <Option>Nearby</Option>
            <Option>Downtown</Option>
            <Option>Harborfront</Option>
            <Option>Old Town</Option>
            <Option>Uptown</Option>
          </Select>
        </div>

        {/* Filters */}
        <Card className="p-4 space-y-4">
          <Typography variant="h5" color="blue-gray" className="flex items-center gap-2">
            <Filter size={20} /> Filters
          </Typography>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            {["Open Now", "Pet Friendly", "Has WiFi", "Outdoor Seating"].map((filter) => (
              <Button key={filter} size="sm" variant="outlined" color="gray">
                {filter}
              </Button>
            ))}
          </div>

          {/* Text search */}
          <Input label="Search by name or keyword" icon={<MapPin />} />
        </Card>


        {/* Food and drink */}
         <SectionCarousel title="Food & Drink" />

        {/* Shopping */}
        <SectionCarousel title="Shopping" />

        {/* Culture */}
        <SectionCarousel title="Culture" />

        {/* Dialog */}
        <Dialog open={open} handler={handleOpen} size="lg">
          <DialogHeader>Property Details</DialogHeader>
          <DialogBody divider className="space-y-4">
            <img
              src="https://picsum.photos/800/400"
              alt="dialog"
              className="rounded-xl w-full object-cover"
            />
            <Typography color="gray">
              This property is located in a vibrant neighborhood with easy access to public
              transport and local amenities.
            </Typography>
            <div className="flex flex-wrap gap-2">
              {["Luxury", "2BR", "Pet Friendly", "City View"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-gray-100 rounded-full text-sm text-blue-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex justify-center py-4">
              <div className="p-4 bg-white border rounded-lg">
                <QrCode size={120} />
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" color="gray" onClick={handleOpen}>
              Close
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  )
}

/* --- Helper Component for Carousels --- */
function SectionCarousel({ title }) {
  return (
    <div className="space-y-3">
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Carousel className="rounded-xl">
        {[1, 2, 3].map((num) => (
          <img
            key={num}
            src={`https://picsum.photos/800/400?random=${num * 2}`}
            alt={`${title} ${num}`}
            className="h-64 w-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default App
