import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import SummaryDetailsItemsContainer from "@/src/frontend/components/itemsMagazine/SummaryDetailsItemsContainer";


test("renders all places", () => {

    const props = {
        title: "Summary Details",
        placeId: 123456,
        items: []
    };

    render(<SummaryDetailsItemsContainer items={props.items} title={props.title} placeId={props.placeId} />);



});