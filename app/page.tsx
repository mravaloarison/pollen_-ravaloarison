"use client";

import LoggedIn from "@/components/loggedIn";
import Login from "@/components/login";
import React, { useState } from "react";

export default function Home() {
	const [isUserSignedIn, setIsUserSignedIn] = useState(true);

	return <>{isUserSignedIn ? <LoggedIn /> : <Login />}</>;
}
